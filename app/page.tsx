import FeaturesCarousel from "@/components/FeaturesCarousel";
import Guide from "@/components/landing/Guide";
import Hero from "@/components/landing/Hero";
import LatestArticles from "@/components/landing/LatestArticles";
import SEOText from "@/components/landing/SEOText";
import Signup from "@/components/landing/Signup";
import Trade from "@/components/landing/Trade";
import WhyCC from "@/components/landing/WhyCC";

export default function Home() {
  return (
    <div className="">
      <section className="w-full container md:mt-20 mt-18 md:px-[84px] px-[42px] cc-hero">
        <Hero />
      </section>
      <section
        className="w-full container md:mt-24 mt-16 px-[84px] cc-features"
        dir="ltr"
      >
        <FeaturesCarousel />
      </section>
      <section className="w-full container md:mt-24 sm:mt-16 md:px-[84px] px-[42px] cc-guide">
        <Guide />
      </section>
      <section className="w-full container mt-14 sm:px-[84px] px-[18px] cc-trade">
        <Trade />
      </section>
      <section className="w-full mt-14 cc-Why">
        <WhyCC />
      </section>
      <section className="w-full container mt-20 md:px-[84px] px-[42px] cc-guide-2">
        <Guide />
      </section>
      <section className="w-full container mt-20 md:px-[84px] px-[42px]">
        <LatestArticles />
      </section>
      <section className="w-full mt-14">
        <Signup />
      </section>
      <section className="w-full container mt-14 md:px-[84px] px-[42px]">
        <SEOText />
      </section>
    </div>
  );
}
