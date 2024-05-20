import React from 'react'

import Header from './_components/Header'
import Slider from './_components/Sliders'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | 74 Degree ',
    description: 'Projects at 74 Degree',
  }

const ProjectPage = () => {
  return (
    <div className='min-h-screen  flex-col items-center justify-around'>
        <Header />
        <Slider />
    </div>
  )
}

export default ProjectPage
