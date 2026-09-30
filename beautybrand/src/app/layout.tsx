import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Aura Botanical | Premium Skincare",
  description: "Discover the essence of natural beauty with Aura Botanical.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-aura-bg text-aura-text min-h-screen flex flex-col`}
      >
        <CustomCursor />
        <Navbar />
        <CartDrawer />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
