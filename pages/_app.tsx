import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-30 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Subtle Animated Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-[moveBackground_20s_linear_infinite]" />

      <main className="relative z-10 p-4 sm:p-8">
        <Component {...pageProps} />
      </main>

      <style jsx global>{`
        @keyframes moveBackground {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
}
