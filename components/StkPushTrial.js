import { useState } from "react";

export default function StkPushTrial() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount: Number(amount) }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Payment request sent! Check your phone to complete.");
      } else {
        setMessage(`❌ Error: ${data.error?.errorMessage || data.error || "Payment failed"}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0d1b2a] p-6 rounded shadow-md max-w-md mx-auto"
    >
      <h3 className="text-2xl mb-4 text-cyan-400 font-semibold text-center">
        STK Push Trial
      </h3>

      <label className="block mb-2 font-semibold" htmlFor="phone">
        Phone Number (2547XXXXXXXX)
      </label>
      <input
        id="phone"
        type="tel"
        placeholder="2547XXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full mb-4 p-2 rounded bg-[#162447] border border-cyan-400 text-white"
      />

      <label className="block mb-2 font-semibold" htmlFor="amount">
        Amount (KES)
      </label>
      <input
        id="amount"
        type="number"
        placeholder="Enter amount"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="w-full mb-4 p-2 rounded bg-[#162447] border border-cyan-400 text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-cyan-400 text-[#0a0f1c] font-bold rounded hover:bg-cyan-500 disabled:opacity-50"
      >
        {loading ? "Sending STK Push..." : "Send STK Push"}
      </button>

      {message && (
        <p className="mt-4 text-center text-gray-300 whitespace-pre-wrap">{message}</p>
      )}
    </form>
  );
}
