import { Footer, Navbar } from "@/components";
import { Hero, Roadmap, Tokenomics } from "@/sections";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}
