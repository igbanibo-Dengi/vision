import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Map from '@/components/map'


const page = () => {
  return (
    <section className='container my-20'>
      <header className='text-2xl sm:text-3xl md:text-4xl mb-10 font-extrabold'>Contact Information</header>
      <section className='flex flex-col sm:flex-row flex-wrap justify-between gap-5 lg:gap-0 mb-5'>
        <p>20 W 34th St., <br /> New York, NY 10001, USA</p>
        <p>Phone: + 1235 2355 98</p>
        <p>Email: info@pixelhost.com</p>
        <p>Website: pixelhost.com</p>
      </section>
      <main className='flex flex-col md:flex-row gap-10'>
        <div className='md:basis-1/2 flex flex-col gap-3'>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="text" placeholder="Subject" />
          <Textarea placeholder="Type your message here." />
          <Button>Send message</Button>
        </div>
        <div className='md:basis-1/2 border border-gray-300'>
          <Map />
        </div>
      </main>

    </section>
  )
}

export default page