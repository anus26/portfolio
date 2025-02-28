import React from 'react'
import HeroPic from './HeroPic.jsx'
import HeroText from './HeroText.jsx'

const HeroMain = () => {
  return (
    <div className=" pt-60 pb-6">
      <div className="flex md:flex-row sm:flex-col  max-w-[1100px] mx-auto justify-between items-center relative px-6">

        <HeroText/>
        <HeroPic/>
        </div><br /><br /><br />

      
        
        


    </div>
  )
}

export default HeroMain