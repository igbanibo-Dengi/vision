import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const accordionContainer = () => {
  return (
    <section className='container mb-40'>
      <header className='text-center mt-20 mb-10 md:max-w-[600px] mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-extrabold mb-10'>Frequently Asked Questions?</h1>
        <p className='text-base text-gray-500'>Have questions? We have answers. Browse through our frequently asked questions to find the information you need.</p>
      </header>

      <div className='flex flex-col md:flex-row'>
        <div className='basis-1/2 md:p-2'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of hosting services do you offer</AccordionTrigger>
              <AccordionContent>
                At PixelHost, we offer a range of hosting solutions tailored to meet your specific needs. Our services include shared hosting, VPS hosting, dedicated servers, and cloud hosting. Whether you are a small business, an e-commerce store, or an enterprise, we have the right hosting solution to ensure your website performs optimally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How secure is my website&apos;s data on your servers?</AccordionTrigger>
              <AccordionContent>
                The security of your data is our top priority. We employ robust security measures, including regular updates, firewalls, and SSL certificates, to protect your website against threats and unauthorized access. Our team continuously monitors and enhances security protocols to ensure your data remains safe and secure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I migrate my existing website to PixelHost?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We offer seamless website migration services to ensure a smooth transition to our hosting platform. Our experienced team will assist you in transferring your website, databases, and emails to our servers, minimizing downtime and ensuring your online presence remains uninterrupted.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='basis-1/2 md:p-2'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger> What level of customer support can I expect?</AccordionTrigger>
              <AccordionContent>
                At PixelHost, we pride ourselves on providing exceptional customer support. Our dedicated support team is available 24/7 to assist you with any technical issues or inquiries you may have. Whether you are a beginner or an experienced user, we are here to provide prompt and knowledgeable assistance whenever you need it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer a money-back guarantee?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 30-day money-back guarantee on our hosting services. If you are not satisfied with our hosting within the first 30 days, we we will provide a full refund, no questions asked. Your satisfaction is our priority, and we&apos;re confident in the quality of our services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Can I upgrade my hosting plan as my website grows?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We understand that your website needs may evolve over time. You can easily upgrade your hosting plan to accommodate increased traffic, storage, and performance requirements. Our flexible plans ensure that your website can scale seamlessly as your online presence expands.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

    </section>
  )
}

export default accordionContainer