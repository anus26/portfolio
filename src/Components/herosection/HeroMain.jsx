import React from 'react'
import HeroPic from './HeroPic.jsx'
import HeroText from './HeroText.jsx'

const HeroMain = () => {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 lg:pt-52 pb-10">
<div className="
flex flex-col md:flex-row
items-center
justify-between
w-full max-w-[1300px]
sm:overflow-x-hidden
mx-auto
sm:m-24
px-4 sm:px-6 lg:px-8
gap-6 md:gap-10
">

        {/* Hero Text */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start text-center md:text-left">
          <HeroText />
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <HeroPic />
        </div>

      </div>

    </div>
  )
}

export default HeroMain