import Image from 'next/image'
import React from 'react'
import HeroImg from "../public/svg/hero-img.svg"
import { Button } from './ui/button'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='container flex flex-col md:flex-row h-screen'>
      <div className='flex flex-col align-middle justify-center gap-3 basis-1/2'>
        <h1 className='text-[36px] sm:text-[48px] md:text-[56px] leading-snug font-extrabold'>
          Design,
          <br />
          Development,
          <br />
          Hosting
        </h1>
        <p className='text-gray-500'>
          Join the ranks of satisfied website owners who trust Wanda for their hosting needs. Elevate your digital journey with unmatched speed, security, and support.
        </p>
        <div>
          <Button size={'lg'}>Get in touch</Button>

        </div>
      </div>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className='basis-1/2 md:mt-0 flex items-center'>
        <Image
          src={HeroImg}
          alt='hero'
        />
      </motion.div>
    </div>
  )
}

export default Hero