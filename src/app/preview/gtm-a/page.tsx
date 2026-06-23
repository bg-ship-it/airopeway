import type { Metadata } from "next";
import {
  PreviewBanner,
  HeroA,
  FounderBlock,
  GtmOsSection,
  ProofCases,
  CompareTable,
  PricingTiers,
  StackStrip,
  StatusFooter,
} from "@/components/preview/sections";

export const metadata: Metadata = {
  title: "Preview · Variant A · Founder-led GTM",
  description: "Internal preview — founder-led hero pivot for AI Ropeway homepage.",
};

export default function GtmPreviewA() {
  return (
    <>
      <PreviewBanner variant="A" />
      <HeroA />
      <FounderBlock />
      <GtmOsSection />
      <ProofCases />
      <CompareTable />
      <PricingTiers />
      <StackStrip />
      <StatusFooter variant="A" />
    </>
  );
}
