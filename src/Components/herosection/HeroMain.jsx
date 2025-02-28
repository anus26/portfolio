import React from 'react'
import HeroPic from './HeroPic'
import HeroText from './HeroText'
import HeroGrandient from './HeroGrandient'
import SubHeroSection from './SubHeroSection'
import AboutMeMain from '../Aboutmesection/AboutMeMain'
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