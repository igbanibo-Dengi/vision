'use client'

import React from 'react'
import ServiceImg from "../public/svg/service-img-2.svg"
import Image from 'next/image'
import { BsSpeedometer } from "react-icons/bs"
import { motion } from 'framer-motion'


const MainServices = () => {
  return (
    <section className='container flex flex-col lg:flex-row my-20  gap-10'>
      <div className='basis-1/2 flex flex-col gap-10'>
        <Image
          src={ServiceImg}
          alt='hero'
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'linear' }}
          viewport={{ once: true }}        >
          <h1 className='text-3xl sm:text-4xl font-extrabold'>Our Core Services</h1>
          <p className='text-gray-500 text-base'>Unlock a world of possibilities with our main service offerings. From lightning-fast web hosting and dynamic web design to robust e-commerce solutions, we&apos;ve got your digital needs covered. Explore our main services and take your online presence to new heights.</p>
        </motion.div>
      </div>
      <div className='grid  md:grid-cols-2 basis-1/2 gap-5 text-center'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'linear' }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Web Hosting</h2>
            <p className="text-gray-500 group-hover:text-white">Experience unrivaled speed and reliability with our cutting-edge web hosting services.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <BsSpeedometer className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'linear' }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Web Design</h2>
            <p className="text-gray-500 group-hover:text-white">Transform your ideas into captivating online experiences with our strategic web design solutions.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <BsSpeedometer className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'linear' }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">E-Commerce</h2>
            <p className="text-gray-500 group-hover:text-white">Unleash your online store&apos;s potential with our e-commerce empowerment services.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <BsSpeedometer className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'linear' }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Digital Marketing</h2>
            <p className="text-gray-500 group-hover:text-white">Elevate your online reach and engagement with our digital marketing mastery.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <BsSpeedometer className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MainServices