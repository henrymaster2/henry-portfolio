import Link from "next/link";
import { motion } from "framer-motion";

export default function EarnifyProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0d1b2a] to-[#162447] text-white px-4 py-10 max-w-4xl mx-auto sm:px-6 md:px-8">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 drop-shadow-lg max-w-full">
          Earnify — Rewards Platform Project
        </h1>
        <Link href="/" className="text-cyan-400 hover:underline whitespace-nowrap">
          ← Back Home
        </Link>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 prose prose-invert max-w-none text-sm sm:text-base"
      >
        <p>
          <strong>Earnify</strong> is a dynamic rewards platform designed to empower users by allowing them to earn coins through a variety of interactive activities. This project combines cutting-edge web technologies and real-time user engagement to create a seamless experience.
        </p>

        <h2>Features</h2>
        <ul>
          <li>
            <strong>Watching Ads & Completing Tasks:</strong> Users can earn coins by engaging with sponsored advertisements and completing daily tasks. This incentivizes active participation while supporting the platform’s monetization.
          </li>
          <li>
            <strong>Spin Wheel Game:</strong> A gamified feature that allows users to spin a wheel to win varying amounts of coins, adding excitement and retention value.
          </li>
          <li>
            <strong>Loan System:</strong> Users can apply to borrow loans within the platform, promoting financial assistance and flexibility.
          </li>
          <li>
            <strong>Investment Opportunities:</strong> Users can invest their earned coins into various financial options designed to grow their balances over time.
          </li>
          <li>
            <strong>Real-Time Chat Groups:</strong> Community features enable users to interact, share tips, and form trader groups for collaborative learning and support.
          </li>
          <li>
            <strong>User Profiles:</strong> Each user has a profile showcasing their activity, coins balance, and social connections, fostering a community atmosphere.
          </li>
          <li>
            <strong>Job Advertisements & Applications:</strong> The platform also supports a job board where users can find relevant opportunities and apply directly.
          </li>
        </ul>

        <h2>Technology Stack</h2>
        <p>
          The project is built with a modern full stack approach:
          <ul>
            <li>Frontend: Next.js, React, Tailwind CSS</li>
            <li>Backend: Node.js, Prisma ORM, PostgreSQL</li>
            <li>Real-time Communication: WebSockets for chat and notifications</li>
            <li>Authentication & Authorization: JWT-based secure login system</li>
            <li>Payment Integrations: Safaricom STK Push, and Equity Bank APIs</li>
          </ul>
        </p>

        <h2>Current Status</h2>
        <p>
          Earnify is currently in the <strong>production stage</strong>, undergoing active development and user testing to ensure reliability and scalability. Due to its live status and sensitive financial operations, public access to the platform is restricted.
        </p>
        <p>
          However, I maintain the project’s source code publicly available for transparency and collaboration. Feel free to explore the repository, raise issues, or contribute!
        </p>

        <p>
          <a
            href="https://github.com/yourusername/earnify" // Replace with your actual GitHub repo URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300 break-words"
          >
            Visit Earnify on GitHub
          </a>
        </p>
      </motion.main>
    </div>
  );
}
