import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Edge } from "@/components/sections/edge";
import { Systems } from "@/components/sections/systems";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Audit } from "@/components/sections/audit";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Edge />
      <Systems />
      <Industries />
      <Process />
      <Faq />
      <Audit />
    </>
  );
}
