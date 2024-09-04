import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/pages/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreaterTechHub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 w-full bg-yellow-400 z-[999]">
          <Navbar />
        </nav>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

