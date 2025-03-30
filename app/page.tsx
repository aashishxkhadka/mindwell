import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 p-4">
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  )
}

