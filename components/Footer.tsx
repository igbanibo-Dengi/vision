import React from 'react'
import { Button } from './ui/button'
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs'
import { GrFacebook, GrMail } from 'react-icons/gr'
import { BiLogoInstagramAlt } from "react-icons/bi"
import { ImLocation2 } from 'react-icons/im'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='bg-primary py-10'>
      <div className='container'>
        <div className=' py-10 gap-6 md:gap-0 flex flex-col md:flex-row justify-between'>
          <div>
            <p className='uppercase text-base font-bold text-gray-100'>get an easy quote</p>
            <h1 className='text-2xl sm:text-3xl text-white font-extrabold'>Sign Up For Web Hostng Today!</h1>
          </div>
          <div>
            <p className='uppercase text-base font-bold text-gray-100'>Starting at only </p>
            <h1 className='text-3xl text-white font-extrabold'>$9.99<span className='text-base '>mo</span></h1>
          </div>
          <div>
            <Button variant={'secondary'} size={'lg'}>Get started now</Button>
          </div>
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='flex flex-col p-5 bg-blue-700 rounded text-white'>
            <h1 className='Logo font-bold text-2xl basis-1/4 mb-10'>PixelHost</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum repudiandae placeat, accusamus dolore hic, temporibus reiciendis quisquam exercitationem optio repellat iste sapiente at dolor totam fugiat? Quos quaerat cumque adipisci maxime!</p>
            <div className='flex gap-10 text-white text-4xl mt-10'>
              <BsTwitter />
              <GrFacebook />
              <BiLogoInstagramAlt />
            </div>
          </div>
          <div className="p-5">
            <h1 className='Logo font-bold text-2xl  basis-1/4 text-white'>Useful Links</h1>
            <div className='flex flex-col gap-5 mt-10'>
              <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>Home</Link>
              <Link href='/about' className='text-gray-300 text-base sm:text-lg hover:text-white'>About</Link>
              <Link href='/domain' className='text-gray-300 text-base sm:text-lg hover:text-white'>Domain</Link>
              <Link href='/blog' className='text-gray-300 text-base sm:text-lg hover:text-white'>Blog</Link>
              <Link href='/contact' className='text-gray-300 text-base sm:text-lg hover:text-white'>Contact</Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className='Logo font-bold text-2xl  basis-1/4 text-white'>Navigation</h1>
            <div className='flex flex-col gap-5 mt-10'>
              <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>Servers</Link>
              <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>Cloud Hosting</Link>
              <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>Windows Hosting</Link>
              <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>OS Servers</Link>
              <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>Linux Servers</Link>
              <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>Policy</Link>
            </div>
          </div>

          <div className="p-5">
            <h1 className='Logo font-bold text-2xl  basis-1/4 text-white'>Office</h1>
            <div className='flex flex-col gap-5 mt-10'>
              <div className='flex gap-5'>
                <div>
                  <ImLocation2
                    className="text-white text-[30px] mt-2"
                  />
                </div>
                <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>20 W 34th St., New York, NY 10001, USA</Link>
              </div>

              <div className='flex gap-5'>
                <div>
                  <BsFillTelephoneFill
                    className="text-white text-[30px]"
                  />
                </div>
                <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>+2 392 3929 210</Link>
              </div>

              <div className='flex gap-5'>
                <div>
                  <GrMail
                    className="text-white text-[30px]"
                  />
                </div>
                <Link href='/' className='text-gray-300 text-base sm:text-lg hover:text-white'>	info@yourdomain.com</Link>
              </div>

            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Footer