import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AI Ropeway | AI GTM, SDR & AI Employees for Global SMBs",
  description:
    "AI Ropeway deploys 18 battle-tested AI systems into your business — turning operations into a revenue engine that runs at machine speed. Claim your free AI audit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${grotesk.variable} ${inter.variable} ${jbMono.variable} h-full`}
    >
      <body className="min-h-full">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <MobileCta />
      </body>
    </html>
  );
}
