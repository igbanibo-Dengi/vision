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
import { Suspense } from "react";
import Loading from "./loading";




export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Hero />
        <DomainSearch />
        <Services />
        <Counter />
        <MainServices />
        <Pricing />
        <Reviews />
        <HowItWorks />
        <BlogDisplay />
      </Suspense>
    </main>
  )
}
