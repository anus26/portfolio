import React from 'react'
import AboutMEImage from './AboutMEImage'
import AboutMeText from './AboutMeText'

const AboutMeMain = () => {
  return (
    <div id='about' className='flex md:flex-row sm:flex-col gap-12 px-12 max-w-[1100px] mx-auto mt-[100px] justify-between items-center' >
        <AboutMeText/>
        <div>

        <AboutMEImage/>
        </div>
    </div>
  )
}

export default AboutMeMain