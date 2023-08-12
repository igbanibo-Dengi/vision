'use client'

import BlogDisplay from "@/components/Blog/BlogDisplay";
import Counter from "@/components/counter";
import DomainSearch from "@/components/domainSearch";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howItWorks";
import MainServices from "@/components/mainServices";
import Pricing from "@/components/pricing";
import Reviews from "@/components/reviews/reviews";
import Services from "@/components/services";




export default function Home() {
  return (
    <main className='h-[6000px]'>
      <Hero />
      <DomainSearch />
      <Services />
      <Counter />
      <MainServices />
      <Pricing />
      <Reviews />
      <HowItWorks />
      <BlogDisplay />

    </main>
  )
}
