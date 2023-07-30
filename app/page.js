import { Footer, Navbar } from "@/components";
import { Hero, Projects, Roadmap, Tokenomics } from "@/sections";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}
