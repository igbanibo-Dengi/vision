import React from 'react'
import { Button } from './ui/button'

const DomainSearch = () => {
  return (
    <section className='max-w-[1200px] mx-auto flex flex-col lg:flex-row py-10 gap-5 lg:gap-0'>
      <div className='pl-10 lg:pr-10 w-full lg:w-[40%] pr-10 flex flex-col justify-center'>
        <h1 className='text-2xl font-extrabold'>Search Your Domain Name</h1>
        <p className='text-gray-500'> It's time to redefine your web hosting experience.</p>
      </div>
      <div className=' w-full mx-auto sm:w-[95%] md:w-[90%] lg:w-[60%]'>
        <div className='bg-primary flex flex-col mx-auto px-5 py-10 md:p-10 gap-4  rounded-tr-lg rounded-bl-lg rounded-[25px]'>
          <div className="flex w-full items-center">
            <input type="email" placeholder="Enter your domain name" className='flex h-10 md:h-16 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50' />
            <Button size={'block'} variant={'block'} type="submit">Search</Button>
          </div>
          <div className='flex flex-wrap gap-2'>
            <p className='border border-gray-200 rounded-full p-1 w-fit flex-nowrap flex text-xs text-white'>.com <span className='text-green-500'>$95</span></p>
            <p className='border border-gray-200 rounded-full p-1 w-fit flex-nowrap flex text-xs text-white'>.com <span className='text-green-500'>$95</span></p>
            <p className='border border-gray-200 rounded-full p-1 w-fit flex-nowrap flex text-xs text-white'>.com <span className='text-green-500'>$95</span></p>
            <p className='border border-gray-200 rounded-full p-1 w-fit flex-nowrap flex text-xs text-white'>.com <span className='text-green-500'>$95</span></p>
            <p className='border border-gray-200 rounded-full p-1 w-fit flex-nowrap flex text-xs text-white'>.com <span className='text-green-500'>$95</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainSearch