import Navigation from '@/components/ui/navigation'
import Hero from '@/components/sections/hero'
import ProblemVisualization from '@/components/sections/problem-visualization'
import Features from '@/components/sections/features'
import EarlyInterest from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ProblemVisualization />
      <Features />
      <EarlyInterest />
      <Contact />
      <Footer />
    </main>
  )
} 