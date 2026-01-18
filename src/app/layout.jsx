import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./landing.css";
import ClientLayout from './ClientLayout';
import { getServerSession } from 'next-auth/next';
import SessionProvider from '@/components/SessionProvider';

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

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning={true} data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
        data-no-extensions="true"
      >
        <SessionProvider session={session}>
          <ClientLayout>{children}</ClientLayout>
        </SessionProvider>
      </body>
    </html>
  );
}