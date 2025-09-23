import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/BackgroundStar";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jake-portfolio-one.vercel.app"), // ✅ 본인 도메인
  title: "Jake's Portfolio",
  description: "Providing the best project experience",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Jake's Portfolio",
    title: "Jake's Portfolio",
    description: "Providing the best project experience",
    images: [
      {
        url: "/image1.png", // ✅ /public/preview.png
        width: 1200,
        height: 630,
        alt: "Jake's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake's Portfolio",
    description: "Providing the best project experience",
    images: ["/image1.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
