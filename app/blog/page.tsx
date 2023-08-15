import React from 'react'
import dummyBlogData from "../../components/Blog/BlogData"
import Link from 'next/link'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Image from 'next/image'

const page = () => {
  return (
    <section className='container pt-10 mb-20'>
      < header className='text-center' >
        <h1 className='mb-4 text-xl sm:text-3xl md:text-4xl font-extrabold'>Blog</h1>
        <p className='text-base text-gray-500'>Check out our latest blog posts</p>
      </header >

      <div className='py-16'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {dummyBlogData.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className='border bg-white p-4 rounded shadow-sm hover:scale-110 transition-all duration-300'>
              <Image
                src={post.imagePath}
                alt={post.header}
                className='w-full h-40 object-cover mb-4 rounded'
                height={500}
                width={500}
              />
              <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                {post.header}
              </h2>
              <h3 className='text-sm text-gray-500 mb-2'>{post.subHeader}</h3>
              <p className='text-blue-500'>Author: {post.author}</p>
              <p className='text-gray-500'>{post.date}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className='flex gap-5 justify-center'>
        <div className='h-10 w-10 flex border border-gray-400 text-primary justify-center items-center rounded-full'>
          <AiOutlineLeft />
        </div>
        <Link href='' className='h-5 w-5 pointer-events-none flex text-white bg-primary justify-center items-center p-5 rounded-full'>1</Link>
        <Link href='' className='h-5 w-5 flex border border-gray-400 text-primary justify-center items-center p-5 rounded-full'>2</Link>
        <Link href='' className='h-5 w-5 flex border border-gray-400 text-primary justify-center items-center p-5 rounded-full'>3</Link>
        <Link href='' className='h-5 w-5 flex border border-gray-400 text-primary justify-center items-center p-5 rounded-full'>4</Link>
        <Link href='' className='h-5 w-5 flex border border-gray-400 text-primary justify-center items-center p-5 rounded-full'>5</Link>
        <div className='h-10 w-10 flex border border-gray-400 text-primary justify-center items-center rounded-full'>
          <AiOutlineRight />
        </div>
      </div>
    </section>
  )
}

export default page