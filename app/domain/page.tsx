import AccordionContainer from '@/components/accordionContainer'
import DomainSearch from '@/components/domainSearch'
import DomainTable from '@/components/domainTable'
import MainServices from '@/components/mainServices'
import React from 'react'

const Page = () => {
  return (
    <section>
      <DomainSearch />
      <DomainTable />
      <MainServices />
      <AccordionContainer />
    </section>
  )
}

export default Page