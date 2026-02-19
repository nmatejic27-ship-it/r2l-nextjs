import type { Metadata } from "next";
import { Bebas_Neue, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "REFUSE2LOSEFIT | Transform Your Body. Rebuild Your Discipline.",
  description:
    "Personalized coaching + accountability that forces real results. Custom training, fat loss strategy, and the mindset system that makes discipline automatic.",
  keywords: [
    "fitness coaching",
    "personal trainer",
    "body transformation",
    "accountability coaching",
    "fat loss",
    "muscle building",
    "REFUSE2LOSEFIT",
  ],
  openGraph: {
    title: "REFUSE2LOSEFIT | Transform Your Body. Rebuild Your Discipline.",
    description:
      "Personalized coaching + accountability that forces real results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "REFUSE2LOSEFIT | Transform Your Body. Rebuild Your Discipline.",
    description:
      "Personalized coaching + accountability that forces real results.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body className="font-body bg-navy text-white antialiased">{children}</body>
    </html>
  );
}
