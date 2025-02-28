import React from 'react'
import ExperienceText from './ExperienceText.jsx'
import ExperienceTop from './ExperienceTop.jsx'
import AllExperience from './AllExperience.jsx'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1100px] mx-auto px-4 '>
      <motion.div
           variants={fadeIn('down',0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false,amount:0.7}}
      >

   <ExperienceText/>
      </motion.div>
      <motion.div
           variants={fadeIn('left',0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false,amount:0}}
      >

   <ExperienceTop/>
      </motion.div>
   <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
   <AllExperience/>

    </div>
  )
}

export default ExperienceMain