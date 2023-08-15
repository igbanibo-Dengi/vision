import { motion } from 'framer-motion';
import React from 'react'
import CountUp from 'react-countup';

const Counter = () => {

  return (
    <section className='bg-primary flex flex-col p-10  gap-10 text-white justify-center items-center mt-40'>
      <p className='uppercase text-base text-center'>Empowering Your Online Success, One Click at a Time!</p>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold flex flex-col md:flex-row gap-10 text-center md:gap-20 lg:gap-40 p-10">
        <div>
          <CountUp start={0} end={12000} delay={0} enableScrollSpy />
          <p className='text-base'>CMS Installations</p>
        </div>
        <div>
          <CountUp start={0} end={100} delay={0} enableScrollSpy />
          <p className='text-base'>Awards Won</p>
        </div>
        <div>
          <CountUp start={0} end={10000} delay={0} enableScrollSpy />
          <p className='text-base'>Registered Domains</p>
        </div>
        <div>
          <CountUp start={0} end={9000} delay={0} enableScrollSpy />
          <p className='text-base'> Staisfied Customers</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Counter