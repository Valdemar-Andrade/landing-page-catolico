import HeroSection from "@/components/hero-section";
import IntroStorytelling from "@/components/intro-storytelling";
import ProductImagesGrid from "@/components/product-images-grid";
import QuoteSection from "@/components/quote-section";
import GuideSection from "@/components/guide-section";
import ComboSection from "@/components/combo-section";
import LifestyleSection from "@/components/lifestyle-section";
import AuthorBio from "@/components/author-bio";
import FAQSection from "@/components/faq-section";
import PricingSectionV2 from "@/components/pricing-sectionv2";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero with real photo */}
      <HeroSection />

      {/* Intro storytelling 2 columns */}
      <IntroStorytelling />

      {/* Grid polaroid images */}
      <ProductImagesGrid />

      {/* Quote 1 - Our Lady of Guadalupe */}
      <QuoteSection
        quote="Que cada página seja um espaço de encontro com Deus."
        backgroundImage="images/background-quote-1.jpeg"
      />

      {/* What's new section */}
      {/*<WhatsNewSection /> --- IGNORE ---*/}

      {/* Guide section */}
      <GuideSection />

      {/* Quote 2 - São Francisco de Sales */}
      <QuoteSection
        quote="Busque a Deus na simplicidade, encontre-O na paz."
        author="São Francisco de Sales"
        backgroundImage="images/background-quote-2.jpeg"
      />

      {/* Combo section */}
      <ComboSection />

      {/* Pricing - BLACK background with 2 golden cards */}
      <PricingSectionV2 />

      {/* Lifestyle section with window */}
      <LifestyleSection />

      {/* Author bio */}
      <AuthorBio />

      {/* FAQ */}
      <FAQSection />
    </main>
  );
}
