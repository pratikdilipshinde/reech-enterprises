import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TemplateMotion from "@/components/animations/TemplateMotion";

export const metadata: Metadata = {
  title: "Reech Solar Enterprises | Solar Energy Website",
  description: "Home Version 1 Next.js modular website based on the Sunex solar template style.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <TemplateMotion />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
