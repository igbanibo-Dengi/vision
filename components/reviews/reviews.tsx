import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import User1 from "../../public/reviewer-1.jpg"
import User2 from "../../public/reviewer-2.jpg"
import User3 from "../../public/reviewer-3.jpg"
import User4 from "../../public/reviewer-4.jpg"
import User5 from "../../public/reviewer-5.jpg"
import User6 from "../../public/reviewer-6.jpg"
import User7 from "../../public/reviewer-7.jpg"


import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';



const Reviews = () => {
  return (
    <section className=' py-20'>

      <div className='text-center'>
        <h1 className='text-3xl sm:text-4xl font-extrabold'>Reviews</h1>
        <p className='text-gray-500'>Words from Our Delighted Clients</p>
      </div>
      <div className='mt-10'>
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          keyboard
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation
          pagination
          className='.swiper_container'

        >
          <SwiperSlide>
            <div className='cards flex flex-col items-center px-10 py-10 border border-gray-200 shadow-lg rounded text-center gap-5 text-gray-500'>
              <Image
                src={User1}
                alt='user-image'
                className='flex h-40 w-40 items-center justify-center rounded-full bg-muted'
              />
              <p>Outstanding service and support! I couldn't be happier with the results.</p>
              <h3 className='text-xl font-bold text-black'>Emily Davis</h3>
              <p className='text-sm'>CEO, Tech Innovations</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='cards flex flex-col items-center px-10 py-10 border border-gray-200 shadow-lg rounded text-center gap-5 text-gray-500'>
              <Image
                src={User2}
                alt='user-image'
                className='flex h-40 w-40 items-center justify-center rounded-full bg-muted'
              />
              <p>Impressive web design that truly captured the essence of our brand.</p>
              <h3 className='text-xl font-bold text-black'>Michael Johnson</h3>
              <p className='text-sm'>Marketing Director, Creative Co.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='cards flex flex-col items-center px-10 py-10 border border-gray-200 shadow-lg rounded text-center gap-5 text-gray-500'>
              <Image
                src={User3}
                alt='user-image'
                className='flex h-40 w-40 items-center justify-center rounded-full bg-muted'
              />
              <p>Flawless e-commerce solutions that skyrocketed our sales. Highly recommended.</p>
              <h3 className='text-xl font-bold text-black'>Jane Wilder</h3>
              <p className='text-sm'>Owner, Trendy Treasures</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='cards flex flex-col items-center px-10 py-10 border border-gray-200 shadow-lg rounded text-center gap-5 text-gray-500'>
              <Image
                src={User4}
                alt='user-image'
                className='flex h-40 w-40 items-center justify-center rounded-full bg-muted'
              />
              <p>Exceptional hosting that ensured our website never missed a beat.</p>
              <h3 className='text-xl font-bold text-black'>William Green</h3>
              <p className='text-sm'>CTO, Digital Dynamics</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='cards flex flex-col items-center px-10 py-10 border border-gray-200 shadow-lg rounded text-center gap-5 text-gray-500'>
              <Image
                src={User5}
                alt='user-image'
                className='flex h-40 w-40 items-center justify-center rounded-full bg-muted'
              />
              <p>The digital marketing strategies provided remarkable ROI. Thrilled!</p>
              <h3 className='text-xl font-bold text-black'>David Brown</h3>
              <p className='text-sm'>Marketing Manager, Global Connect</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='cards flex flex-col items-center px-10 py-10 border border-gray-200 shadow-lg rounded text-center gap-5 text-gray-500'>
              <Image
                src={User6}
                alt='user-image'
                className='flex h-40 w-40 items-center justify-center rounded-full bg-muted'
              />
              <p>A game-changer for our online presence. The results speak for themselves.</p>
              <h3 className='text-xl font-bold text-black'>Olivia White</h3>
              <p className='text-sm'>Founder, Health Hub</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='cards flex flex-col items-center px-10 py-10 border border-gray-200 shadow-lg rounded text-center gap-5 text-gray-500'>
              <Image
                src={User7}
                alt='user-image'
                className='flex h-40 w-40 items-center justify-center rounded-full bg-muted'
              />
              <p>Innovative designs combined with seamless functionality. A winning combination.</p>
              <h3 className='text-xl font-bold text-black'>John Smith</h3>
              <p className='text-sm'>Art Director, Studio Spectrum</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section >
  )
}

export default Reviews