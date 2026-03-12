import Navbar from "@/components/layout/Navbar";
import BottomTab from "@/components/layout/BottomTab";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Inspirations from "@/components/home/Inspirations";

export default function Home() {
  return (
    <div className="pb-24">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Inspirations />
      <BottomTab />
    </div>
  );
}
