import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import HeroImg from "../public/svg/hero-img.svg"

import { Button } from './ui/button'


const HowItWorks = () => {
  return (
    <section className='container mt-60'>
      <Tabs defaultValue="account" className="">
        <TabsList className='flex gap-5 md:gap-10'>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="name">name</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className='flex flex-col md:flex-row mt-10 gap-5'>
          <div className='flex flex-col align-middle justify-center gap-3 basis-1/2'>
            <h1 className='text-[36px] sm:text-[48px] leading-snug font-extrabold'>
              Reliable Web Hosting
            </h1>
            <p className='text-gray-500'>
              Ensure your website is always available and secure with our reliable web hosting services. We offer fast and efficient hosting solutions tailored to your unique needs. Whether you're a small business owner or a growing enterprise, our team is dedicated to providing the uptime and support you deserve.
            </p>
            <div>
              <Button size={'lg'}>Get in touch</Button>

            </div>
          </div>
          <div className='basis-1/2 mt-8 md:mt-0'>
            <Image
              src={HeroImg}
              alt='hero'
            />
          </div>
        </TabsContent>
        <TabsContent value="password" className='flex flex-col md:flex-row-reverse mt-10 gap-5'>
          <div className='flex flex-col align-middle justify-center gap-3 basis-1/2'>
            <h1 className='text-[36px] sm:text-[48px] leading-snug font-extrabold'>
              Powerful Hosting Services
            </h1>
            <p className='text-gray-500'>
              Experience the full power of your website with our cutting-edge hosting services. Our robust packages are designed to handle high traffic and demanding applications, giving you the performance you need to deliver an exceptional user experience. From lightning-fast loading times to seamless scalability, our hosting services empower your online presence.
            </p>
            <div>
              <Button size={'lg'}>Get in touch</Button>

            </div>
          </div>
          <div className='basis-1/2 mt-8 md:mt-0'>
            <Image
              src={HeroImg}
              alt='hero'
            />
          </div>
        </TabsContent>
        <TabsContent value="name" className='flex flex-col md:flex-row mt-10 gap-5'>
          <div className='flex flex-col align-middle justify-center gap-3 basis-1/2'>
            <h1 className='text-[36px] sm:text-[48px] leading-snug font-extrabold'>
              Scalable Hosting Solutions
            </h1>
            <p className='text-gray-500'>
              As your online presence grows, so should your hosting capabilities. Our scalable hosting solutions allow you to expand your website's resources as your needs evolve. From shared hosting to dedicated servers, we offer a range of options to accommodate your growth. Stay focused on your business while we ensure your website can handle increased traffic and demand.
            </p>
            <div>
              <Button size={'lg'}>Get in touch</Button>

            </div>
          </div>
          <div className='basis-1/2 mt-8 md:mt-0'>
            <Image
              src={HeroImg}
              alt='hero'
            />
          </div>
        </TabsContent>
      </Tabs>

    </section>
  )
}

export default HowItWorks



// "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent border border-gray-300 text-primary hover:bg-primary/90 hover:text-white p5 px-3 py-2 h-10 md:h-16 w-[100px] md:w-[200px] rounded",