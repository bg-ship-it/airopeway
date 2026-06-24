import type { Metadata } from "next";
import {
  PreviewBadge,
  Hero,
  PillarsSection,
  RevenueStack,
  FounderBlock,
  ProofCases,
  CompareTable,
  PricingTiers,
  StackStrip,
  StatusFooter,
} from "@/components/preview/sections";

export const metadata: Metadata = {
  title: "Preview · v3 hybrid · AI GTM",
  description:
    "Internal preview — AI GTM positioning hybrid for AI Ropeway homepage.",
};

export default function GtmPreviewHybrid() {
  return (
    <>
      <PreviewBadge />
      <Hero />
      <PillarsSection />
      <RevenueStack />
      <FounderBlock />
      <ProofCases />
      <CompareTable />
      <PricingTiers />
      <StackStrip />
      <StatusFooter />
    </>
  );
}
