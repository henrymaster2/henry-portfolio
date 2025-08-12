import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0d1b2a] to-[#162447] text-white px-6 py-10 max-w-5xl mx-auto">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-lg rounded-md px-2 py-1 bg-cyan-900/20 backdrop-blur-sm">
          Personal Blog - My Technologies &amp; Skills
        </h1>
        <Link href="/" className="text-cyan-400 hover:underline">
          ← Back Home
        </Link>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="prose prose-invert max-w-none space-y-8"
      >
        <article>
          <h2>My Passion for Full Stack Development</h2>
          <p>
            I am deeply passionate about building modern web applications that are performant, maintainable, and scalable.
            Through years of experience, I have developed expertise in several technologies that enable me to craft quality software solutions.
          </p>
        </article>

        <article>
          <h3>JavaScript &amp; TypeScript</h3>
          <p>
            JavaScript is the backbone of modern web development, enabling dynamic and interactive user experiences.
            By mastering JavaScript and its typed superset, TypeScript, I write code that is both powerful and robust.
            TypeScript&apos;s static typing reduces bugs early in development and improves maintainability, which I highly value in production projects.
          </p>
        </article>

        <article>
          <h3>Elixir &amp; Phoenix Framework</h3>
          <p>
            Elixir is a functional, concurrent language built on the Erlang VM — designed for fault-tolerant, distributed systems.
            I love Elixir for its scalability and clean syntax. The Phoenix Framework complements Elixir perfectly by providing a productive web development environment.
            Phoenix&apos;s LiveView enables real-time interactive applications without the complexity of front-end JavaScript frameworks — making apps more maintainable and performant.
          </p>
        </article>

        <article>
          <h3>HTML &amp; CSS</h3>
          <p>
            HTML and CSS form the structure and styling of all web content.
            I ensure semantic, accessible HTML markup paired with modern CSS techniques, including Flexbox and Grid, to create responsive, beautiful designs.
            Clean and well-organized stylesheets are essential to user experience and brand consistency.
          </p>
        </article>

        <article>
          <h3>Prisma &amp; PostgreSQL</h3>
          <p>
            For database management, I use PostgreSQL — a powerful, reliable, and open-source relational database system.
            Prisma serves as a modern ORM that simplifies database access with type-safe queries and migrations.
            This combination accelerates development while ensuring data integrity and performance.
          </p>
        </article>

        <article>
          <h3>Safaricom STK Push Integration</h3>
          <p>
            Integrating mobile money payments is critical in many regions, especially here in Kenya.
            Safaricom&apos;s STK Push API allows seamless and secure mobile payments initiated directly from an application.
            I have hands-on experience implementing this API, enabling users to pay conveniently via their phones, boosting transaction success and user trust.
          </p>
        </article>

        <article>
          <h3>Banking APIs like Equity Bank</h3>
          <p>
            Connecting apps to traditional banking APIs unlocks new possibilities such as automated payments, account management, and transaction tracking.
            I have integrated APIs from major banks like Equity Bank, bridging the gap between fintech apps and conventional banking infrastructure.
            This creates a cohesive experience for users while complying with security and regulatory requirements.
          </p>
        </article>

        <article>
          <h3>Why I Love These Technologies</h3>
          <p>
            What excites me most is combining these technologies to build full solutions that solve real problems.
            Whether it&apos;s crafting interactive frontends, scalable backends, or integrating payments, I approach every project with attention to detail and passion for quality.
            Constant learning and staying updated with tech trends drive me to continuously improve and deliver value.
          </p>
        </article>
      </motion.main>
    </div>
  );
}
