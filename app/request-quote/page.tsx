import React from 'react'
import RHero from './components/hero'
import Form from './components/form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request A Quote | 74 Degree ',
  description: 'Request a quote from 74 Degree.',
}

const RequestQuote = () => {
  return (
    <div className='bg-gray-900'>
      <RHero />
      <Form />
    </div>
  )
}

export default RequestQuote
