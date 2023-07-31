import { Footer, Navbar } from "@/components";
import {
  Hero,
  Mission,
  OurOffering,
  Projects,
  Roadmap,
  Tokenomics,
} from "@/sections";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <Mission />
        <div className="gradient-03 z-0" />
        <OurOffering />
      </div>
      <div className="relative">
        <Projects />
        <div className="gradient-04 z-0" />
        <Tokenomics />
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
}
