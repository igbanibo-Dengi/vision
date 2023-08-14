'use client'


import About from '@/components/about'
import Counter from '@/components/counter'
import HowItWorks from '@/components/howItWorks'
import MainServices from '@/components/mainServices'
import Reviews from '@/components/reviews/reviews'
import React from 'react'

const page = () => {
  return (
    <>
      <About />
      <Counter />
      <MainServices />
      <Reviews />
      <HowItWorks />
    </>
  )
}

export default page