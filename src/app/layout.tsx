import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/HeaderNavbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "MJS Global | Your Strategic Partner in the UAE",
  description: "Accounting, taxation, compliance and advisory solutions designed to help businesses operate with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll>
          <HeaderNavbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
