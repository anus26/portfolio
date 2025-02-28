import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft.jsx'
import ExperienceTopMiddel from './ExperienceTopMiddel.jsx'
import ExperienceTopRight from './ExperienceTopRight.jsx'

const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row  sm:flex-col gap-4 itesm-center justify-center'>
        <ExperienceTopLeft/>
        <ExperienceTopMiddel/>
        <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop