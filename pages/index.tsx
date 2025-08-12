import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0d1b2a] to-[#162447] text-white px-6 py-10">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 md:gap-0"
      >
        <h1 className="text-2xl font-bold text-cyan-400 drop-shadow-lg rounded-md px-2 py-1 bg-cyan-900/20 backdrop-blur-sm">
          Henry Bundi Masita
        </h1>
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-300 text-center">
            <li className="hover:text-cyan-400 transition">
              <Link href="/" className="block px-2 py-1">Home</Link>
            </li>
            <li className="hover:text-cyan-400 transition">
              <Link href="#projects" className="block px-2 py-1">Projects</Link>
            </li>
            <li className="hover:text-cyan-400 transition">
              <Link href="#contact" className="block px-2 py-1">Contact</Link>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 max-w-3xl mx-auto px-4 rounded-lg bg-[#0f172a]/70 backdrop-blur-md shadow-lg"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
          Full Stack Developer
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          I am a passionate Full Stack Developer with experience in building modern, high-performance web applications.
          Skilled in JavaScript, TypeScript, Elixir, Phoenix framework, HTML, CSS, Prisma, and PostgreSQL.
          I also integrate payment APIs such as Safaricom STK Push and connect to banking systems like Equity Bank.
        </p>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="mb-16 max-w-7xl mx-auto px-4">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-cyan-400 drop-shadow-lg">
          Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Earnify — Rewards Platform",
              desc: "Rewards-based platform where users earn coins by watching ads, completing tasks, and playing games.",
              link: "/projects/earnify",
            },
            {
              title: "Personal Blog",
              desc: "A blog for sharing tutorials, project updates, and insights into full stack development.",
              link: "/projects/blog",
            },
            {
              title: "FinLink Pay — Landing Page",
              desc: "Secure payment gateway with STK Push and bank API integration for businesses.",
              link: "/projects/finlink",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Link
                href={project.link}
                className="block bg-[#14253d]/80 p-6 rounded-xl shadow-lg border border-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-cyan-300">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">{project.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl mx-auto px-4 rounded-lg bg-[#0f172a]/70 backdrop-blur-md shadow-lg py-8"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-400 drop-shadow-lg">
          Contact Me
        </h3>
        <p className="text-sm sm:text-base">
          Email:{" "}
          <a
            href="mailto:masterhenry681@gmail.com"
            className="underline text-cyan-300 break-all"
          >
            masterherny681@gmail.com
          </a>
        </p>
        <p className="text-sm sm:text-base">
          Phone:{" "}
          <span className="text-cyan-300">0759027692</span> /{" "}
          <span className="text-cyan-300">0758027692</span>
        </p>
      </motion.section>
    </div>
  );
}
