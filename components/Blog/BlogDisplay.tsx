import React from 'react'

import dummyBlogData from "./BlogData"
import Link from 'next/link'

const BlogDisplay = () => {
  const firstThreePosts = dummyBlogData.slice(0, 3)
  return (

    <section className='container mt-40'>
      < header className='text-center' >
        <h1 className='mb-4 text-xl sm:text-3xl md:text-4xl font-extrabold'>Recent Blog</h1>
        <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque ipsa est aperiam cumque libero.</p>
      </header >

      <div className='py-16'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {firstThreePosts.map((post) => (
            <Link href='/' key={post.id} className='border bg-white p-4 rounded shadow-md hover:scale-110 transition-all duration-300'>
              <img
                src={post.imagePath}
                alt={post.header}
                className='w-full h-40 object-cover mb-4 rounded'
              />
              <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                {post.header}
              </h2>
              <h3 className='text-sm text-gray-500 mb-2'>{post.subHeader}</h3>
              {/* <p className='text-gray-600 mb-4'>{post.content}</p> */}
              <p className='text-blue-500'>Author: {post.author}</p>
              <p className='text-gray-500'>{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogDisplay


