import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // 1. Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuloDev | Template Company Profile",
  description: "Company profile template menarik dengan Next.js dan Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-brand-blue min-h-screen flex flex-col`}>
        <Navbar />
        
        {/* Konten Utama (Hero, Services, dll akan mengisi bagian ini yang bisa flex-grow) */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 2. Footer dipasang di paling bawah */}
        <Footer />
      </body>
    </html>
  );
}