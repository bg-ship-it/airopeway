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
  OtherSystems,
  StackStrip,
  StatusFooter,
} from "@/components/preview/sections";

export const metadata: Metadata = {
  title: "Preview · v4 final draft · AI GTM",
  description:
    "Internal preview — final draft for review before going live.",
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
      <OtherSystems />
      <StackStrip />
      <StatusFooter />
    </>
  );
}
