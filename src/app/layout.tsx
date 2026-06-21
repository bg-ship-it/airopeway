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

const SITE_URL = "https://www.airopeway.com";
const TITLE = "AI Ropeway | AI GTM, SDR & AI Employees for Global SMBs";
const DESCRIPTION =
  "AI Ropeway deploys 18 battle-tested AI systems into your business — turning operations into a revenue engine that runs at machine speed. Claim your free AI audit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | AI Ropeway",
  },
  description: DESCRIPTION,
  applicationName: "AI Ropeway",
  keywords: [
    "AI consulting",
    "AI transformation",
    "AI GTM strategy",
    "AI SDR",
    "AI employees",
    "AI automation",
    "AI deployment partner",
    "AI systems for SMBs",
    "RevOps automation",
    "AI agents",
  ],
  authors: [{ name: "Bharat Gulati" }],
  creator: "AI Ropeway",
  publisher: "AI Ropeway",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AI Ropeway",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

// Organization + WebSite structured data (JSON-LD) for rich results & entity recognition.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "AI Ropeway",
      url: SITE_URL,
      description: DESCRIPTION,
      email: "bg@aiplacers.com",
      founder: { "@type": "Person", name: "Bharat Gulati" },
      areaServed: ["IN", "AU", "GB", "US", "CA"],
      sameAs: ["https://www.aiplacers.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AI Ropeway",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <MobileCta />
      </body>
    </html>
  );
}
