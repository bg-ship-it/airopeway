import type { Metadata } from "next";
import {
  PreviewBanner,
  HeroB,
  GtmOsSection,
  FounderBlock,
  ProofCases,
  CompareTable,
  PricingTiers,
  StackStrip,
  StatusFooter,
} from "@/components/preview/sections";

export const metadata: Metadata = {
  title: "Preview · Variant B · Product-led GTM OS",
  description: "Internal preview — product-led hero pivot for AI Ropeway homepage.",
};

export default function GtmPreviewB() {
  return (
    <>
      <PreviewBanner variant="B" />
      <HeroB />
      <GtmOsSection />
      <FounderBlock />
      <ProofCases />
      <CompareTable />
      <PricingTiers />
      <StackStrip />
      <StatusFooter variant="B" />
    </>
  );
}
