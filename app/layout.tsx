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
  description: "Comprehensive survey results and data visualization for the University of Waterloo Mechatronics Engineering Class of 2025",
  openGraph: {
    title: 'Tron Class 2025 - Mechatronics Engineering Survey',
    description: 'Explore the experiences, achievements, and insights of the Waterloo Mechatronics Class of 2025',
    type: 'website',
    url: 'https://tronclass-2025.vercel.app',
    images: [
      {
        url: 'https://tronclass-2025.vercel.app/SEO_Title.png',
        alt: 'Mechatronics Engineering Class of 2025',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tron Class 2025 - Mechatronics Engineering Survey',
    description: 'Comprehensive survey results and data visualization for the Waterloo Mechatronics Class of 2025',
    images: ['https://tronclass-2025.vercel.app/SEO_Title.png'],
  },
  keywords: [
    'Mechatronics',
    'Engineering',
    'University of Waterloo',
    'Class of 2025',
    'Survey',
    'Data Visualization',
    'Education',
  ],
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
