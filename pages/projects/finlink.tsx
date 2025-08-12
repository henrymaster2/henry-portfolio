import Link from "next/link";
import { motion } from "framer-motion";
import StkPushTrial from "@/components/StkPushTrial";

export default function FinLink() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0d1b2a] to-[#162447] text-white px-4 py-10 sm:px-6 md:px-8">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 sm:gap-0"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 drop-shadow-lg">
          FinLink Pay
        </h1>
        <nav>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-300 text-sm sm:text-base">
            <li className="hover:text-cyan-400 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-cyan-400 transition">
              <Link href="#features">Features</Link>
            </li>
            <li className="hover:text-cyan-400 transition">
              {/* Anchor link stays */}
              <a href="#stkpush" className="hover:text-cyan-400 transition">
                STK Push Trial
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername/finlink-pay"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-cyan-300"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 max-w-xl mx-auto px-4 sm:px-0"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] leading-tight">
          Secure Payment Gateway
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          FinLink Pay offers seamless, secure payment processing for your business, integrating Safaricom STK Push and major bank APIs including Equity Bank.  
          Empower your customers with fast, reliable, and convenient payment solutions backed by strong encryption and compliance standards.
        </p>
      </motion.section>

      {/* Features */}
      <section
        id="features"
        className="mb-20 max-w-4xl mx-auto px-4 sm:px-0 text-gray-300"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-cyan-400 drop-shadow-lg">
          Key Features
        </h3>
        <ul className="space-y-6 text-base sm:text-lg list-disc list-inside max-w-xl mx-auto">
          <li>
            <strong>Safaricom STK Push Integration:</strong> Direct mobile payment prompts, allowing customers to pay instantly from their mobile wallets.
          </li>
          <li>
            <strong>Bank API Connectivity:</strong> Secure connection to bank systems like Equity Bank for real-time transaction processing.
          </li>
          <li>
            <strong>High Security Standards:</strong> End-to-end encryption, fraud detection, and compliance with financial regulations.
          </li>
          <li>
            <strong>Developer Friendly:</strong> Easy-to-use APIs and documentation to integrate payments smoothly into your existing infrastructure.
          </li>
          <li>
            <strong>Dashboard & Reporting:</strong> Comprehensive transaction monitoring and analytics to keep your business informed.
          </li>
        </ul>
      </section>

      {/* STK Push Trial Form */}
      <section id="stkpush" className="max-w-xl mx-auto px-4 sm:px-0">
        <StkPushTrial />
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-xs sm:text-sm px-4 sm:px-0">
        <p>© {new Date().getFullYear()} FinLink Pay. All rights reserved.</p>
      </footer>
    </div>
  );
}
