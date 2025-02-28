import React from 'react'
import AboutMEImage from './AboutMEImage.jsx'
import AboutMeText from './AboutMeText.jsx'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const AboutMeMain = () => {
  return (
    <div id='about' className='flex md:flex-row sm:flex-col gap-12 px-12 max-w-[1100px] mx-auto mt-[100px] justify-between items-center' >

      <motion.div
      
           variants={fadeIn('right',0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false,amount:0.7}}>

        <AboutMeText/>
      </motion.div>
        <motion.div
             variants={fadeIn('left',0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:false,amount:0.7}}
        >

        <AboutMEImage/>
        </motion.div>
    </div>
  )
}

export default AboutMeMain