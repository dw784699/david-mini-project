import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dawei David Mini Project",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="w-full border-b border-gray-800 px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Dawei(David)
            </Link>

            <div className="flex gap-6 text-sm text-gray-300">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}