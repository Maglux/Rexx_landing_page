import { Footer, Navbar } from "@/components";
import {
  Hero,
  HeroAnimation,
  Mission,
  OurOffering,
  Projects,
  Roadmap,
  RoadmapDesign_2,
  Tokenomics,
} from "@/sections";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <HeroAnimation />
        <OurOffering />
        <Mission />
        {/* <Projects /> */}
        <Tokenomics />
        {/* <Roadmap /> */}
        <RoadmapDesign_2 />
        <Footer />
      </Suspense>
    </div>
  );
}
