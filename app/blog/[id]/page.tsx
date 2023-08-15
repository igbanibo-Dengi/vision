import React from 'react'
import dummyBlogData from "../../../components/Blog/BlogData"
import { notFound } from "next/navigation";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const getData = () => {
  const data = dummyBlogData.find((post) => post.id);

  if (data) {
    return data;
  }

  return notFound();
};

const page = () => {

  const firstfivePosts = dummyBlogData.slice(0, 5)

  const post = getData();
  return (
    <section className='container mt-20 mb-20'>
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold mb-6">{post.header}</h1>

        <div className='flex gap-5'>
          <Image
            src={post.imagePath}
            alt={post.header}
            className="w-full h-60 md:h-96  rounded md:basis-3/4 mx-auto"
            width={500}
            height={500}
          />
          <article className='lg:flex flex-col gap-5 justify-center items-center hidden lg:basis-1/4 p-4 bg-neutral-200 rounded'>
            <h1 className='text-xl mb-2 font-bold'>Subscribe to Our Newsletter for Hosting Insights</h1>
            <p className='text-base'>Join our community of over 70,000 professionals and elevate your hosting experience. Receive expert insights, hosting resources, and tips delivered directly to your inbox every week.</p>
            <Button size={'sm'} className='mx-auto'>Sign me up</Button>
          </article>
        </div>
        <div className="flex gap-5 mt-10">
          <div className='md:basis-3/4 p-3 border-r border-gray-300'>
            <article className='text-lg leading-8'>
              In today's fast-paced digital landscape, businesses are constantly seeking ways to optimize their online presence and enhance user experiences. One of the most transformative solutions that has reshaped the hosting industry is cloud hosting. In this blog post, we dive into the world of cloud hosting and explore how PixelHost is leading the charge in revolutionizing the way businesses host and scale their websites.

              <h1 className='text-xl sm:text-3xl font-bold mb-5 mt-20'> The Cloud Hosting Revolution</h1>
              Cloud hosting has emerged as a game-changer, offering unparalleled scalability, reliability, and flexibility. Traditional hosting solutions often face limitations in handling sudden spikes in traffic or accommodating the evolving needs of a growing website. Enter cloud hosting – a dynamic infrastructure that harnesses the power of multiple interconnected servers to ensure seamless performance and resource allocation.

              <h1 className='text-xl sm:text-3xl font-bold mb-5 mt-20'> PixelHost's Cloud Hosting Expertise</h1>
              At PixelHost, we've harnessed the potential of cloud hosting to empower businesses of all sizes. Our state-of-the-art Cloud Hosting 360° platform offers a comprehensive suite of features designed to optimize every aspect of your hosting experience. From lightning-fast loading speeds to automated scalability, PixelHost's cloud hosting ensures your website remains effortlessly responsive even during traffic surges.

              <h1 className='text-xl sm:text-3xl font-bold mb-5 mt-20'>Effortless Scalability</h1>
              PixelHost's cloud hosting architecture allows your website to scale effortlessly as your business grows. Say goodbye to the constraints of traditional hosting – with cloud hosting, resources are allocated on-demand, ensuring your website always performs at its best, regardless of the traffic influx.

              <h1 className='text-xl sm:text-3xl font-bold mb-5 mt-20'>Unrivaled Reliability</h1>
              Downtime is a thing of the past with PixelHost's cloud hosting. Our redundant infrastructure and failover mechanisms ensure that your website remains online and accessible even in the face of hardware failures. Your data is replicated across multiple servers, providing an added layer of protection against unforeseen disruptions.

              <h1 className='text-xl sm:text-3xl font-bold mb-5 mt-20'>Future-Ready Performance</h1>
              As technology evolves, so do the demands on your website. PixelHost's cloud hosting keeps you future-ready by seamlessly integrating the latest advancements. From AI-driven optimizations to cutting-edge security features, our cloud hosting solution is designed to keep your website at the forefront of digital innovation.

              <h1 className='text-xl sm:text-3xl font-bold mb-5 mt-20'>The PixelHost Advantage</h1>
              What sets PixelHost apart is our commitment to delivering an exceptional hosting experience. With a dedicated support team available 24/7, you can rest assured that your cloud hosting journey is backed by experts who are passionate about your success. Our user-friendly control panel puts the power of cloud hosting at your fingertips, allowing you to easily manage and monitor your resources.

              Embark on Your Cloud Hosting Journey with PixelHost
              As businesses continue to embrace the digital age, cloud hosting has become an indispensable tool for achieving online success. PixelHost's Cloud Hosting 360° is not just a hosting solution – it's a catalyst for digital transformation. Join the ranks of businesses that have unlocked unparalleled performance, scalability, and reliability with PixelHost's cloud hosting. Elevate your website to new heights and embark on a journey of digital innovation today.

              Discover the limitless possibilities of cloud hosting with PixelHost. Your website's future starts here.
            </article>
          </div>
          <div className='md:basis-1/4 p-1 hidden md:block'>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="text-blue-500 mb-6">Author: {post.author}</p>
            <div className='flex-col gap-5 flex'>
              <h3 className='text-lg font-medium'>Similar posts</h3>
              {firstfivePosts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className='border bg-white p-4 rounded shadow-sm hover:scale-110 transition-all duration-300 mb-5'>
                  <img
                    src={post.imagePath}
                    alt={post.header}
                    className='w-full h-40 object-cover mb-4 rounded'
                  />
                  <h2 className='text-xl  md:text-lg font-semibold text-gray-800 mb-2'>
                    {post.header}
                  </h2>
                  <h3 className='text-sm text-gray-500 mb-2'>{post.subHeader}</h3>

                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page