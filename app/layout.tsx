import type { Metadata } from "next";
import {
  Aref_Ruqaa,
  Reem_Kufi,
  Tajawal,
  Cormorant_Garamond,
  Jost,
} from "next/font/google";
import { translations } from "@/lib/i18n";
import "./globals.css";

const aref = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref",
  display: "swap",
});

const reem = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-reem",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

// Latijnse luxe-fonts (voor de Nederlandse versie)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

// Productie-URL automatisch via Vercel; lokaal valt het terug op localhost.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const nameA = `${translations.nl.nameA} & ${translations.nl.nameB}`;
const nameAr = `${translations.ar.nameA} و ${translations.ar.nameB}`;

// Wat in de link-preview verschijnt (WhatsApp, Instagram, ...) — NL + Arabisch
const shareTitle = `Bruiloft uitnodiging · دعوة زفاف — ${nameA}`;
const shareDescription = `${nameA} · ${nameAr} — ${translations.nl.dateLabel}, ${translations.nl.venue.name}. Je bent van harte uitgenodigd! · يسعدنا دعوتكم لحضور حفل زفافنا`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: shareTitle,
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    type: "website",
    locale: "nl_NL",
    alternateLocale: "ar_AR",
    siteName: shareTitle,
    images: [{ url: "/m.webp", alt: shareTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: ["/m.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${aref.variable} ${reem.variable} ${tajawal.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
