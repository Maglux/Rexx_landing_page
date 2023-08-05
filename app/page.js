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

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
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
    </div>
  );
}
