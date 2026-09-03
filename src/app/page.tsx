import HeroSection from "@/components/home/HeroSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import FeaturesSection from "@/components/home/FeaturesSection";
import WebPlayerSection from "@/components/home/WebPlayerSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DeviceSupport from "@/components/home/DeviceSupport";
import SportsSection from "@/components/home/SportsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <CategoryStrip />
      <FeaturesSection />
      <WebPlayerSection />
      <HowItWorksSection />
      <DeviceSupport />
      <SportsSection />
      <PricingSection />
      <FAQSection />
      <SupportCtaSection />
      <FinalCtaSection />
    </main>
  );
}
