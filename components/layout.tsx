import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl absolute -top-40 -left-40 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl absolute top-60 -right-32 animate-pulse delay-300"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400 hover:scale-105 transition-transform">
            Earnify
          </h1>
          <ul className="flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-purple-400 after:left-0 after:bottom-[-4px] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
