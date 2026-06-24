import type { Metadata } from "next";
import { PreviewNav } from "@/components/preview/preview-nav";
import { FloatingBottomCta } from "@/components/preview/floating-bottom-cta";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const hideRootNavCss = `body > header { display: none !important; }`;

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hideRootNavCss }} />
      <PreviewNav />
      {children}
      <FloatingBottomCta />
    </>
  );
}
