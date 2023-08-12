import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const NavBar = () => {
  return (
    <div className='justify-center  w-full hidden md:flex'>
      <nav className='flex p-5 justify-between items-center w-full max-w-[1200px] '>
        <h1 className='Logo font-bold text-2xl basis-1/4'>Wanda</h1>
        <div className='flex justify-between items-center basis-3/4 lg:basis-2/4 uppercase'>
          <Link href='/' className='hover:text-primary text-sm font-semibold'>Home</Link>
          <Link href='/' className='hover:text-primary text-sm font-semibold'>About</Link>
          <Link href='/' className='hover:text-primary text-sm font-semibold'>Domain</Link>
          <Link href='/' className='hover:text-primary text-sm font-semibold'>Hosting</Link>
          <Link href='/' className='hover:text-primary text-sm font-semibold'>Blog</Link>
          <Link href='/' className='hover:text-primary text-sm font-semibold'>Contact</Link>
          <Button>Get Started</Button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar