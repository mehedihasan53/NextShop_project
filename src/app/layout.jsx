import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextShop",
  description: "A modern e-commerce demo built with Next.js and Express",
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Toaster from '../components/Toaster';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16 lg:pt-18">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
