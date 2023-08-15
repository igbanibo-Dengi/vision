import React from 'react'
import { Button } from './ui/button'
import { motion } from "framer-motion"

const Pricing = () => {
  return (
    <section className=' container py-10'>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className='text-center mx-auto p mb-20'>
        <h1 className='text-4xl font-extrabold'>Plans & Billing</h1>
        <p className='text-base font-bold pt-2 text-gray-500'>Mange your plan and billing details</p>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='bg-white flex flex-col hover:border-primary transition-all duration-300 items-center px-5 py-6 justify-between rounded shadow-lg border-2 border-gray-300'>
          <p className='text-xl font-bold'>Free Forever</p>
          <h1 className='text-3xl font-extrabold'><span className='text-sm'>$</span>0<span className='text-sm'>/mo</span></h1>
          <div className='flex flex-col gap-2 my-5'>
            <p className='text-sm font-bold text-gray-500'>Free forever</p>
            <p className='text-sm font-bold text-gray-500'>Ideal for beginners and personal projects</p>
            <p className='text-sm font-bold text-gray-500'>Limited features but a great way to get started</p>
            <p className='text-sm font-bold text-gray-500'>Basic customer support</p>
            <p className='text-sm font-bold text-gray-500'>Access to essential tools</p>
            <p className='text-sm font-bold text-gray-500'>Upgrade anytime</p>
          </div>
          <Button>Choose Plan</Button>
        </div>
        <div className='bg-white flex flex-col hover:border-primary transition-all duration-300 items-center px-5 py-6 justify-between rounded shadow-lg border-2 border-gray-300'>
          <p className='text-xl font-bold'> Basic Plan</p>
          <h1 className='text-3xl font-extrabold'><span className='text-sm'>$</span>9.99<span className='text-sm'>/mo</span></h1>
          <div className='flex flex-col gap-2 my-5'>
            <p className='text-sm font-bold text-gray-500'>Perfect for small businesses and freelancers</p>
            <p className='text-sm font-bold text-gray-500'>Enhanced features for more advanced projects</p>
            <p className='text-sm font-bold text-gray-500'>Priority customer support</p>
            <p className='text-sm font-bold text-gray-500'>Essential analytics and reporting</p>
            <p className='text-sm font-bold text-gray-500'>Customization options</p>
            <p className='text-sm font-bold text-gray-500'>Free plan features included</p>
          </div>
          <Button>Choose Plan</Button>
        </div>
        <div className='bg-white flex flex-col hover:border-primary transition-all duration-300 items-center px-5 py-6 justify-between rounded shadow-lg border-2 border-gray-300'>
          <p className='text-xl font-bold'>Premium Plan</p>
          <h1 className='text-3xl font-extrabold'><span className='text-sm'>$</span>29.99<span className='text-sm'>/mo</span></h1>
          <div className='flex flex-col gap-2 my-5'>
            <p className='text-sm font-bold text-gray-500'>Designed for growing businesses</p>
            <p className='text-sm font-bold text-gray-500'>Advanced tools and resources</p>
            <p className='text-sm font-bold text-gray-500'>24/7 dedicated customer support</p>
            <p className='text-sm font-bold text-gray-500'>Comprehensive analytics</p>
            <p className='text-sm font-bold text-gray-500'>Premium customization</p>
            <p className='text-sm font-bold text-gray-500'>Basic plan and Basic plan features</p>
          </div>
          <Button>Choose Plan</Button>
        </div>
        <div className='bg-white flex flex-col hover:border-primary transition-all duration-300 items-center px-5 py-6 justify-between rounded shadow-lg border-2 border-gray-300'>
          <p className='text-xl font-bold'>Pro Plan</p>
          <h1 className='text-3xl font-extrabold'><span className='text-sm'>$</span>99.99<span className='text-sm'>/mo</span></h1>
          <div className='flex flex-col gap-2 my-5'>
            <p className='text-sm font-bold text-gray-500'>Tailored for large enterprises</p>
            <p className='text-sm font-bold text-gray-500'>All features unlocked</p>
            <p className='text-sm font-bold text-gray-500'>VIP customer support</p>
            <p className='text-sm font-bold text-gray-500'>Advanced analytics with real-time tracking</p>
            <p className='text-sm font-bold text-gray-500'>Complete customization</p>
            <p className='text-sm font-bold text-gray-500'>All features from lower plans included</p>
          </div>
          <Button>Choose Plan</Button>
        </div>
      </motion.div>


    </section>
  )
}

export default Pricing