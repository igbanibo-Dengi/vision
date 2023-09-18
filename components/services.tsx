import React from 'react'
import { BsSpeedometer } from "react-icons/bs"
import { SiSpringsecurity } from "react-icons/si"
import { TbWorldShare } from "react-icons/tb"
import { BiSupport } from "react-icons/bi"
import { PiMedalFill } from "react-icons/pi"
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className="container">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.4, delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col gap-3 text-center mb-20">
        <h1 className="font-extrabold text-3xl md:text-4xl w-">Why Choose Us</h1>
        <p className="text-gray-500 text-sm max-w-[500px] mx-auto">we specialize in providing top-tier web hosting services that seamlessly blend speed, reliability, and unparalleled support.</p>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-5 mt-36">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse sm:flex-row rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Fast Performance</h2>
            <p className="text-gray-500 group-hover:text-white">Say goodbye to slow-loading websites! Our state-of-the-art infrastructure ensures lightning-fast page load times, giving your visitors an exceptional browsing experience.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <BsSpeedometer className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse sm:flex-row rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Robust Reliability</h2>
            <p className="text-gray-500 group-hover:text-white">Downtime is a thing of the past. With our rock-solid hosting architecture and 99.9% uptime guarantee, your website will always be accessible, no matter the demand.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <PiMedalFill className=" h-fit w-pit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse sm:flex-row rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Enhanced Security</h2>
            <p className="text-gray-500 group-hover:text-white">Your data&apos;s safety is our priority. Benefit from advanced security measures that safeguard your website and customer information from potential threats.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <SiSpringsecurity className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse sm:flex-row rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Scalable Solutions</h2>
            <p className="text-gray-500 group-hover:text-white"> As your online presence grows, so should your hosting capabilities. Our scalable plans allow you to seamlessly upgrade as your traffic and business expand.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <TbWorldShare className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse sm:flex-row rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Expert Support</h2>
            <p className="text-gray-500 group-hover:text-white"> Have questions? Need assistance? Our expert support team is available 24/7 to provide personalized solutions and ensure your hosting experience remains smooth.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <BiSupport className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group p-4 flex flex-col-reverse sm:flex-row rounded bg-white hover:bg-primary hover:text-white transition-all duration-300">
          <div className="p-5">
            <h2 className="text-xl font-extrabold mb-2">Versatile Hosting Options</h2>
            <p className="text-gray-500 group-hover:text-white">rom shared hosting for startups to dedicated servers for established enterprises, we offer a wide range of hosting packages tailored to your specific requirements.</p>
          </div>
          <div className="p-4 flex justify-center items-center ">
            <div className="p-4 rounded-full bg-primary text-white   group-hover:text-primary group-hover:bg-white transition-all duration-300">
              <BsSpeedometer className=" h-fit w-fit rounded-full font-light  text-[60px]" />
            </div>
          </div>
        </motion.div>


      </div>
    </section >
  )
}

export default Services