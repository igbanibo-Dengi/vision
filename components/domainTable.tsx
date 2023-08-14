import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from './ui/button'


const DomainTable = () => {
  return (
    <section className='container mb-40'>
      <header className='text-center mt-20 max-w-[600px] mx-auto mb-5'>
        <h1 className='text-3xl sm:text-4xl font-extrabold mb-5 md:mb-50'>Domain Pricing</h1>
        <p className='text-base text-gray-500'>Find the perfect domain for your website at competitive prices. Explore our domain pricing options and secure your online identity today.</p>
      </header>

      <div className='py-5'>
        <Table>
          <TableHeader className='bg-green-500 text-white'>
            <TableRow className=''>
              <TableHead className="text-center w-[100px]">Invoice</TableHead>
              <TableHead className="text-center">Duration</TableHead>
              <TableHead className="text-center">Registeration</TableHead>
              <TableHead className="text-center">Transfer</TableHead>
              <TableHead className="text-center">Renewal</TableHead>
              <TableHead className="text-center">Register</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='font-semibold'>
            <TableRow>
              <TableCell className="text-center font-medium bg-primary text-white">.com</TableCell>
              <TableCell className="text-center">1 Year</TableCell>
              <TableCell className="text-center bg-gray-200">$99</TableCell>
              <TableCell className="text-center">$5.00</TableCell>
              <TableCell className="text-center bg-gray-200">$5.00</TableCell>
              <TableCell className="text-center"><Button size={'sm'}>Sign Up</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-medium bg-primary text-white">.org</TableCell>
              <TableCell className="text-center">1 Year</TableCell>
              <TableCell className="text-center bg-gray-200">$85</TableCell>
              <TableCell className="text-center">$5.00</TableCell>
              <TableCell className="text-center bg-gray-200">$5.00</TableCell>
              <TableCell className="text-center"><Button size={'sm'}>Sign Up</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-medium bg-primary text-white">.net</TableCell>
              <TableCell className="text-center">1 Year</TableCell>
              <TableCell className="text-center bg-gray-200">$60</TableCell>
              <TableCell className="text-center">$5.00</TableCell>
              <TableCell className="text-center bg-gray-200">$5.00</TableCell>
              <TableCell className="text-center"><Button size={'sm'}>Sign Up</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-medium bg-primary text-white">.biz</TableCell>
              <TableCell className="text-center">1 Year</TableCell>
              <TableCell className="text-center bg-gray-200">$85</TableCell>
              <TableCell className="text-center">$5.00</TableCell>
              <TableCell className="text-center bg-gray-200">$5.00</TableCell>
              <TableCell className="text-center"><Button size={'sm'}>Sign Up</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-medium bg-primary text-white">.info</TableCell>
              <TableCell className="text-center">1 Year</TableCell>
              <TableCell className="text-center bg-gray-200">$100</TableCell>
              <TableCell className="text-center">$5.00</TableCell>
              <TableCell className="text-center bg-gray-200">$5.00</TableCell>
              <TableCell className="text-center"><Button size={'sm'}>Sign Up</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>
    </section>
  )
}

export default DomainTable