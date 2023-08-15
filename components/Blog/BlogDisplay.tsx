import React from 'react'

import dummyBlogData from "./BlogData"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BlogDisplay = () => {
  const firstThreePosts = dummyBlogData.slice(0, 3)
  return (

    <section className='container mt-40'>
      < motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4, ease: 'linear' }}
        viewport={{ once: true }}
        className='text-center' >
        <h1 className='mb-4 text-xl sm:text-3xl md:text-4xl font-extrabold'>Blog</h1>
        <p className='text-base text-gray-500'>Check out our latest blog posts</p>
      </motion.div >

      <div className='py-16'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: 'linear' }}
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {firstThreePosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className='border bg-white p-4 rounded shadow-md hover:scale-110 transition-all duration-300'>
              <Image
                src={post.imagePath}
                alt={post.header}
                className='w-full h-40 object-cover mb-4 rounded'
                width={100}
                height={100}
              />
              <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                {post.header}
              </h2>
              <h3 className='text-sm text-gray-500 mb-2'>{post.subHeader}</h3>
              <p className='text-blue-500'>Author: {post.author}</p>
              <p className='text-gray-500'>{post.date}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogDisplay


