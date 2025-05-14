import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language-context";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "WFS Data Analyzer Tool",
  description:
    "Analyze, visualize, and download data from Web Feature Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
