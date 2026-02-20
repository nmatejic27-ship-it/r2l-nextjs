import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Refuse2LoseFIT — Elite Transformation Coaching",
    template: "%s | Refuse2LoseFIT",
  },
  description:
    "Elite personal transformation coaching. Serious fat loss, muscle building, and performance for driven individuals ready to level up.",
  keywords: [
    "personal training",
    "transformation coaching",
    "fat loss",
    "muscle building",
    "elite coaching",
    "Refuse2Lose",
    "online personal trainer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://refuse2losefit.com",
    siteName: "Refuse2LoseFIT",
    title: "Refuse2LoseFIT — Elite Transformation Coaching",
    description:
      "Elite personal transformation coaching for serious individuals ready to level up.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refuse2LoseFIT — Elite Transformation Coaching",
    description: "Elite personal transformation coaching.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
