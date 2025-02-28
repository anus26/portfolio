import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillSM from './AllSkillSM'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const SkillsMain = () => {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden'>
          <motion.div
           variants={fadeIn('down',0.2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false,amount:0}}
                  >
            
        <SkillsText/>
          </motion.div>

        <div className='mb-[50px] lg:block sm:hidden '>

        <AllSkills/>
        </div>
        <div className='sm:block lg:hidden'>
            <AllSkillSM/>
        </div>
        </div>

    </div>
  )
}

export default SkillsMain