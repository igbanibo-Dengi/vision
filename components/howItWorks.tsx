import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import HostingImg from "../public/hosting.svg"
import InternetImg from "../public/internet.svg"
import ServerImg from "../public/server.svg"

import { Button } from './ui/button'


const HowItWorks = () => {
  return (
    <section className='container mt-0 '>
      <Tabs defaultValue="account" className="mb-10">
        <TabsList className='flex gap-5 md:gap-10 mb-10'>
          <TabsTrigger value="account">hosting</TabsTrigger>
          <TabsTrigger value="password">Services</TabsTrigger>
          <TabsTrigger value="name">Solutions</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className='flex flex-col md:flex-row'>
          <div className='flex flex-col align-middle justify-center gap-3 basis-1/2'>
            <h1 className='text-xl text-center leading-snug font-extrabold'>
              Reliable Web Hosting
            </h1>
            <p className='text-gray-500'>
              Ensure your website is always available and secure with our reliable web hosting services. We offer fast and efficient hosting solutions tailored to your unique needs. Whether you're a small business owner or a growing enterprise, our team is dedicated to providing the uptime and support you deserve.
            </p>
            <div className='flex justify-center items-center md:block mt-10'>
              <Button size={'lg'}>Get in touch</Button>

            </div>
          </div>
          <div className='hidden md:block basis-1/2 mt-8 md:mt-0 p-14'>
            <Image
              src={HostingImg}
              alt='hero'
            />
          </div>
        </TabsContent>
        <TabsContent value="password" className='flex flex-col md:flex-row-reverse'>
          <div className='flex flex-col align-middle justify-center gap-3 basis-1/2'>
            <h1 className='text-xl text-center leading-snug font-extrabold'>
              Powerful Hosting Services
            </h1>
            <p className='text-gray-500'>
              Experience the full power of your website with our cutting-edge hosting services. Our robust packages are designed to handle high traffic and demanding applications, giving you the performance you need to deliver an exceptional user experience. From lightning-fast loading times to seamless scalability, our hosting services empower your online presence.
            </p>
            <div className='flex justify-center items-center md:block mt-10'>
              <Button size={'lg'}>Get in touch</Button>

            </div>
          </div>
          <div className='hidden md:block basis-1/2 mt-8 md:mt-0 p-14'>
            <Image
              src={InternetImg}
              alt='hero'
            />
          </div>
        </TabsContent>
        <TabsContent value="name" className='flex flex-col md:flex-row'>
          <div className='flex flex-col align-middle justify-center gap-3 basis-1/2'>
            <h1 className='text-xl text-center leading-snug font-extrabold'>
              Scalable Hosting Solutions
            </h1>
            <p className='text-gray-500'>
              As your online presence grows, so should your hosting capabilities. Our scalable hosting solutions allow you to expand your website's resources as your needs evolve. From shared hosting to dedicated servers, we offer a range of options to accommodate your growth. Stay focused on your business while we ensure your website can handle increased traffic and demand.
            </p>
            <div className='flex justify-center items-center md:block mt-10'>
              <Button size={'lg'}>Get in touch</Button>

            </div>
          </div>
          <div className='hidden md:block basis-1/2 mt-8 md:mt-0 p-14'>
            <Image
              src={ServerImg}
              alt='hero'
            />
          </div>
        </TabsContent>
      </Tabs>

    </section>
  )
}

export default HowItWorks
