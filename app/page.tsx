import Header from '@/components/header'
import Hero from '@/components/hero'
import Heritage from '@/components/heritage'
import FeaturedVehicles from '@/components/featured-vehicles'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-background overflow-hidden">
      <Header />
      <Hero />
      <Heritage />
      <FeaturedVehicles />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
