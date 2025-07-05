import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language-context";
import Footer from "@/components/footer";
import { SuppressHydrationWarnings } from "@/components/suppress-hydration-warnings";

export const metadata: Metadata = {
  title: "WFS-Explorer",
  description:
    "Visualize, analyze and export WFS Data directly in the browser.",
  openGraph: {
    title: "WFS-Explorer",
    description:
      "Visualize, analyze and export WFS Data directly in the browser.",
    url: "https://wfsexplorer.odis-berlin.de",
    siteName: "WFS-Explorer",
    images: [
      {
        url: "https://wfsexplorer.odis-berlin.de/og-image.png",
        width: 1200,
        height: 630,
        alt: "WFS Explorer preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SuppressHydrationWarnings />
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>

        {process.env.NODE_ENV === "production" && (
          <img
            referrerPolicy="no-referrer-when-downgrade"
            src="https://piwik.technologiestiftung-berlin.de/matomo.php?idsite=57&amp;rec=1"
            style={{ border: 0 }}
            alt=""
          />
        )}
      </body>
    </html>
  );
}
