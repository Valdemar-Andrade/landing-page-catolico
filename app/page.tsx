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
        backgroundImage="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&h=800&fit=crop"
      />

      {/* What's new section */}
      {/*<WhatsNewSection /> --- IGNORE ---*/}

      {/* Guide section */}
      <GuideSection />

      {/* Quote 2 - São Francisco de Sales */}
      <QuoteSection
        quote="Busque a Deus na simplicidade, encontre-O na paz."
        author="São Francisco de Sales"
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
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
