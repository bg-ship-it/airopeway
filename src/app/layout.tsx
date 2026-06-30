import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";
import { CookieBanner } from "@/components/cookie-banner";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FloatingBottomCta } from "@/components/preview/floating-bottom-cta";
import { faqs } from "@/lib/content";

const GTM_ID = "GTM-T3T6HRG9";

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
const TITLE = "AI GTM engines that book meetings | AI Ropeway";
const DESCRIPTION =
  "AI GTM engines for B2B founders. Signal detection, enrichment, personalized outreach, reply triage. Shipped to your repo in 14 days. Live demo on your data.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | AI Ropeway",
  },
  description: DESCRIPTION,
  applicationName: "AI Ropeway",
  keywords: [
    "AI GTM",
    "AI SDR",
    "AI agents",
    "B2B SaaS GTM",
    "AI outbound",
    "signal-based outbound",
    "AI revenue operations",
    "AI sales automation",
    "AI lead generation",
    "AI GTM engineering",
  ],
  authors: [{ name: "Bharat Gulati" }],
  creator: "AI Ropeway",
  publisher: "AI Ropeway",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "AI Ropeway",
      url: `${SITE_URL}/`,
      description: DESCRIPTION,
      email: "bg@aiplacers.com",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      founder: { "@id": `${SITE_URL}/#founder` },
      areaServed: ["IN", "AU", "GB", "US", "CA"],
      sameAs: [
        "https://www.aiplacers.com",
        "https://www.linkedin.com/in/bharatgulati/",
      ],
      knowsAbout: [
        "AI GTM engines",
        "AI SDR automation",
        "signal-based outbound",
        "B2B SaaS go-to-market",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Bharat Gulati",
      jobTitle: "Founder & CEO",
      url: `${SITE_URL}/founder`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "IIM Indore",
      },
      sameAs: ["https://www.linkedin.com/in/bharatgulati/"],
      knowsAbout: [
        "Enterprise sales",
        "AI automation",
        "Go-to-market strategy",
        "B2B SaaS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "AI Ropeway",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-sprint`,
      name: "AI GTM Sprint",
      description:
        "1 AI SDR engine, built and deployed in 14 days. Signal detection, enrichment, personalized outreach. Full code handoff.",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "AI GTM Engine Deployment",
      offers: {
        "@type": "Offer",
        price: "3000",
        priceCurrency: "USD",
        description: "One-time deployment with 3 months bug-fix support",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-partnership`,
      name: "GTM Partnership",
      description:
        "Dedicated AI GTM engineer. Ship a new agent every month. Weekly optimization. Slack channel access.",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Ongoing AI GTM Engineering",
      offers: {
        "@type": "Offer",
        price: "2500",
        priceCurrency: "USD",
        description: "Monthly ongoing partnership",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  analytics_storage:'denied',
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  wait_for_update:500
});
`,
          }}
        />
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <main>{children}</main>
        <BlogPreview />
        <SiteFooter />
        <FloatingBottomCta />
        <MobileCta />
        <CookieBanner />
      </body>
    </html>
  );
}
