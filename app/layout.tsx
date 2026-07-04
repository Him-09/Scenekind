import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import {
  ogImage,
  shortSiteDescription,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const display = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "AI commercials",
    "AI product ads",
    "AI video production",
    "motion design studio",
    "creator-style video ads",
    "AI UGC ads",
    "cinematic ads",
    "performance creative studio",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: siteTitle,
    description:
      "Realistic commercials, product ads, motion design, and creator-style video - produced faster through AI-first creative workflows.",
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} studio preview`,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: shortSiteDescription,
    images: [ogImage],
  },
  creator: siteName,
  publisher: siteName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
