import React from 'react'
import ExperienceInfo from './ExperienceInfo.jsx'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special '>Since 2023</p>
        <div className='justify-center items-center gap-4'>
            <ExperienceInfo number="3" text="Years"/>
        <p className='font-bold text6xl  text-lightBrown'>-</p>
        <ExperienceInfo number="23" text="Websites"/>
        
        </div>
        <p className='text-cneter text-white '>With 3 years of experience building dynamic and user-friendly web application</p>
        <ExperienceInfo number="$100k" text="Max Budget"/>
    </div>
  )
}

export default ExperienceTopLeft