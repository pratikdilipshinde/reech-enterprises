import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TemplateMotion from "@/components/animations/TemplateMotion";

export const metadata = {
  title: "Reech Solar Enterprises",
  description:
    "Southern California solar, roofing, battery storage, maintenance, diagnostics, and energy consulting services.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    // apple: [
    //   {
    //     url: "/apple-icon.png",
    //     sizes: "180x180",
    //     type: "image/png",
    //   },
    // ],
  },
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
