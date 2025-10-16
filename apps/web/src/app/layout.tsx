import "../styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIRWD | Universal Reward Platform",
  description: "A scalable online ordering, loyalty, and rewards platform built for modern businesses.",
  keywords: ["UNIRWD", "online ordering", "rewards", "loyalty", "Next.js", "Square"],
  openGraph: {
    title: "UNIRWD",
    description: "Universal Reward – a complete online ordering and loyalty system.",
    url: "https://unirwd.com",
    siteName: "UNIRWD",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UNIRWD Platform"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <header className="w-full border-b bg-white px-6 py-4 shadow-sm">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <h1 className="text-2xl font-bold text-sky-600 tracking-tight">
              UNIRWD
            </h1>
            <nav className="space-x-6 text-sm font-medium text-gray-700">
              <a href="/" className="hover:text-sky-600">Home</a>
              <a href="/menu" className="hover:text-sky-600">Menu</a>
              <a href="/rewards" className="hover:text-sky-600">Rewards</a>
              <a href="/account" className="hover:text-sky-600">Account</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl p-6">{children}</main>

        <footer className="border-t bg-white py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} UNIRWD. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
