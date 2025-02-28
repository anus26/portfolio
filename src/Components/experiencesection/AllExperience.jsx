import React from 'react'
import SingleExperience from './SingleExperience'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const experiences=[
    {
        job:'Front-End Developer ',
        company:'ABC Company',
        duration:'Jan 2024 - Present',
        responsibilities:[
            'Implementing reusable components','Participating in large scale application ','Working on the performance of web application ','Generating new ideas for better user experience '
        ],

        

    }
]
const AllExperience = () => {
  return (
    <motion.div
               variants={fadeIn('right',0.2)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once:false,amount:0.7}}
                       fle>
        {experiences.map((experience,index)=>{
            return<SingleExperience key={index} experience={experience}/>
        })}
    </motion.div>
  )
}

export default AllExperience