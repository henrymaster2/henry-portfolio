import { useState } from "react";

export default function RequestDemoForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!form.name || !form.email || !form.company) {
      setError("Please fill in all required fields: Name, Company, Email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send request");
      setSuccess("Your demo request has been submitted! We'll get back to you soon.");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#1b2a49] p-6 rounded-lg shadow-lg border border-cyan-500/50">
      <h4 className="text-cyan-400 text-xl font-semibold mb-4">Request a Demo</h4>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-400 mb-2">{success}</p>}

      <label className="block mb-2">
        Name*  
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 rounded bg-[#162447] text-white border border-cyan-500"
          required
        />
      </label>

      <label className="block mb-2">
        Company*  
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full mt-1 p-2 rounded bg-[#162447] text-white border border-cyan-500"
          required
        />
      </label>

      <label className="block mb-2">
        Email*  
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 rounded bg-[#162447] text-white border border-cyan-500"
          required
        />
      </label>

      <label className="block mb-2">
        Phone  
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mt-1 p-2 rounded bg-[#162447] text-white border border-cyan-500"
        />
      </label>

      <label className="block mb-4">
        Message  
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full mt-1 p-2 rounded bg-[#162447] text-white border border-cyan-500"
          placeholder="Anything specific you want to discuss?"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded transition-colors"
      >
        {loading ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
