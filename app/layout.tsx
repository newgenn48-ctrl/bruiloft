import type { Metadata } from "next";
import {
  Aref_Ruqaa,
  Reem_Kufi,
  Tajawal,
  Cormorant_Garamond,
  Jost,
} from "next/font/google";
import { wedding } from "@/lib/config";
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

export const metadata: Metadata = {
  title: `${wedding.partnerA} و ${wedding.partnerB} — دعوة زفاف`,
  description: `يسعدنا دعوتكم لحضور حفل زفاف ${wedding.partnerA} و ${wedding.partnerB} في ${wedding.dateLabel}.`,
  openGraph: {
    title: `${wedding.partnerA} و ${wedding.partnerB} — دعوة زفاف`,
    description: `${wedding.dateLabel} · ${wedding.location}`,
    type: "website",
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
