import Features from "@/components/features";
import FreeTrial from "@/components/freeTrial";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import AnimatedSectionRight from "@/components/ui/animated section-right";
import AnimatedSectionUp from "@/components/ui/animated-section-up";
import AnimatedSectionLeft from "@/components/ui/animation-section-left";
import { IMAGES } from "@/constants/images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* ===== FIXED BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10">
        <Image src={IMAGES.HOMEPAGE_IMG} alt="Background" fill className="object-cover" priority />
      </div>
      {/* ===== PAGE CONTENT ===== */}
      <AnimatedSectionUp>
        <Hero />
      </AnimatedSectionUp>
      <AnimatedSectionLeft>
        <Features />
      </AnimatedSectionLeft>
      <AnimatedSectionRight>
        <Testimonials />
      </AnimatedSectionRight>
      <AnimatedSectionUp>
        <Pricing />
      </AnimatedSectionUp>
      <AnimatedSectionUp>
        <FreeTrial />
      </AnimatedSectionUp>

    </main>
  );
}
