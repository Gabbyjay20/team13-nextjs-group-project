import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Handcrafted Haven",
    template: "%s | Handcrafted Haven",
  },

  description:
    "Handcrafted Haven is a marketplace connecting customers with talented African artisans and authentic handmade products.",

  keywords: [
    "handmade products",
    "African artisans",
    "handcrafted products",
    "African crafts",
    "artisan marketplace",
    "handmade crafts",
  ],

  authors: [
    {
      name: "Handcrafted Haven",
    },
  ],

  openGraph: {
    title: "Handcrafted Haven",
    description:
      "Discover unique handcrafted products from talented African artisans.",
    type: "website",
    siteName: "Handcrafted Haven",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}