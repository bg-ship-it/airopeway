import {
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

export default function Home() {
  return (
    <>
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
