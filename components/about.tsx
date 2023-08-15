import Image from 'next/image'
import React from 'react'
import GoalsImg from "../public/goals.svg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsTwo"
import { Button } from './ui/button'
import Funding from "../public/funding.svg"
import Growth from "../public/growth.svg"
import Rocket from "../public/rocket.svg"



const About = () => {
  return (
    <section className='container'>

      <header className='mx-auto text-center pt-20'>
        <h1 className='text-4xl font-extrabold mb-10'>Our Story</h1>
        <hr className="border-t-3 border-gray-500" />
      </header>
      <article className='flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col md:px-10 align-middle justify-center gap-3 basis-1/2'>
          <h1 className='text-xl sm:text-2xl md:text-3xl leading-snug font-bold'>
            Our Founding
          </h1>
          <p className='text-gray-500 '>
            In the bustling year of 2007, PixelHost emerged as the brainchild of Alex Turner and Lily Chen. Fueled by a shared passion for design and development, they embarked on a journey to redefine the digital landscape. PixelHost&apos;s inception was marked by the establishment of a visionary blog and an online hub, serving as a platform for some of the industry's brightest minds to exchange ideas and insights.
          </p>
        </div>
        <div className='basis-1/2 mt-8 md:mt-0 p-10'>
          <Image
            src={Funding}
            alt='hero'
          />
        </div>
      </article>

      <article className='flex flex-col-reverse md:flex-row-reverse'>
        <div className='flex flex-col md:px-10 align-middle justify-center gap-3 basis-1/2'>
          <h1 className='text-xl sm:text-2xl md:text-3xl leading-snug font-bold'>
            Early Growth and Funding
          </h1>
          <p className='text-gray-500 '>
            As the echoes of innovation reverberated, PixelHost experienced a meteoric rise. Its early growth was fueled by a fervent dedication to pushing the boundaries of design and development. The company&apos;s unwavering commitment attracted the attention of investors who recognized its potential to disrupt the industry. With strategic funding, PixelHost was poised to expand its horizons and embrace new opportunities.
          </p>
        </div>
        <div className='basis-1/2 mt-8 md:mt-0 p-10'>
          <Image
            src={Growth}
            alt='hero'
          />
        </div>
      </article>

      <article className='flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col md:px-10 align-middle justify-center gap-3 basis-1/2'>
          <h1 className='text-xl sm:text-2xl md:text-3xl leading-snug font-bold'>
            To Infinity and Beyond!
          </h1>
          <p className='text-gray-500 '>
            Emboldened by the success of its hosting endeavors, PixelHost set its sights on an ambitious future. Armed with a suite of cutting-edge hosting technologies, PixelHost embarked on a mission to empower businesses across the globe. The sky was not the limit, it was just the beginning. With a trajectory aimed at infinity and beyond, PixelHost envisions a world where seamless hosting experiences propel businesses to unprecedented heights, guided by the spirit of innovation that ignited its inception.
          </p>
        </div>
        <div className='basis-1/2 mt-8 md:mt-0 p-10'>
          <Image
            src={Rocket}
            alt='hero'
          />
        </div>
      </article>

      <div className='flex flex-col md:flex-row'>
        <div className=' mt-8 md:mt-0  mb-20'>
          <Image
            src={GoalsImg}
            alt='hero'
          />
        </div>
        <div className='md:max-w-[50%] my-auto'>
          <Tabs defaultValue="account" className="mb-6">
            <TabsList className='flex gap-0 sm:gap-5 md:gap-10 mb-10'>
              <TabsTrigger value="account">What we do</TabsTrigger>
              <TabsTrigger value="password">Our mission</TabsTrigger>
              <TabsTrigger value="name">Our goal</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className='flex flex-col md:flex-row'>
              <div className='flex flex-col align-middle justify-center gap-3'>
                <h1 className='text-xl text-center leading-snug font-extrabold'>
                  What we do
                </h1>
                <p className='text-gray-500 px-6'>
                  At our core, we specialize in delivering top-notch web hosting solutions that empower businesses to thrive in the digital landscape. With a keen focus on performance, reliability, and scalability, we provide a comprehensive range of hosting services tailored to meet your unique needs. From shared hosting for startups to enterprise-level solutions, we&apos;re dedicated to ensuring your online presence is secure, fast, and always available.
                </p>
                <div className='flex justify-center items-center md:block mt-10 md:px-6'>
                  <Button size={'lg'}>Get in touch</Button>

                </div>
              </div>

            </TabsContent>
            <TabsContent value="password" className='flex flex-col md:flex-row-reverse'>
              <div className='flex flex-col align-middle justify-center gap-3'>
                <h1 className='text-xl text-center leading-snug font-extrabold'>
                  Our mission
                </h1>
                <p className='text-gray-500 px-6'>
                  Our mission is to redefine the hosting experience for our clients. We are committed to leveraging cutting-edge technologies and industry best practices to create an ecosystem where your digital ambitions can flourish. Through unwavering dedication to customer satisfaction, we aim to be the catalyst that propels your online endeavors towards unparalleled success. We believe that by offering seamless, feature-rich hosting backed by exceptional support, we can enable businesses to unlock their full potential.
                </p>
                <div className='flex justify-center items-center md:block mt-10 md:px-6'>
                  <Button size={'lg'}>Get in touch</Button>

                </div>
              </div>

            </TabsContent>
            <TabsContent value="name" className='flex flex-col md:flex-row'>
              <div className='flex flex-col align-middle justify-center gap-3'>
                <h1 className='text-xl text-center leading-snug font-extrabold'>
                  Our Goal
                </h1>
                <p className='text-gray-500 px-6'>
                  our goal is to be more than just a hosting provider,  we strive to be your strategic partner in the digital realm. We are passionate about fostering innovation and growth for our clients. By consistently delivering high-performance hosting solutions, personalized support, and innovative features, we aim to empower businesses of all sizes to thrive in the ever-evolving online landscape. Your success is our success, and together, we&apos;re working towards a future where your online presence knows no bounds.
                </p>
                <div className='flex justify-center items-center md:block mt-10 md:px-6'>
                  <Button size={'lg'}>Get in touch</Button>

                </div>
              </div>

            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  )
}

export default About