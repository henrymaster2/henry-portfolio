import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const {
      MPESA_CONSUMER_KEY,
      MPESA_CONSUMER_SECRET,
      MPESA_SHORTCODE,
      MPESA_PASSKEY,
      MPESA_CALLBACK_URL,
      MPESA_BASE_URL,
    } = process.env;

    const { amount, phone } = req.body;

    if (!amount || !phone) {
      return res.status(400).json({ error: "Amount and phone are required" });
    }

    // 1. Get OAuth token
    const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString("base64");
    const tokenResponse = await axios.get(
      `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // 2. Generate timestamp in YYYYMMDDHHmmss format
    const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);

    // 3. Generate password (Base64 of Shortcode + Passkey + Timestamp)
    const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString("base64");

    // 4. STK Push request body
    const stkRequest = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: "Earnify Payment",
      TransactionDesc: "Payment for services",
    };

    // 5. Make STK Push API call
    const stkResponse = await axios.post(
      `${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
      stkRequest,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json(stkResponse.data);
  } catch (error) {
    console.error("STK Push Error:", error.response?.data || error.message);
    return res.status(500).json({
      error: error.response?.data || "Internal Server Error",
    });
  }
}
