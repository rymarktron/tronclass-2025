import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tron Class 2025 Survey",
  description: "Class survey results and data visualization for Mechatronics Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100`}
      >
        <div className="flex min-h-screen">
          <Navbar />
          <main className="flex-1 md:ml-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
