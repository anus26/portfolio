import React from 'react'
import SingleExperience from './SingleExperience'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const experiences=[
    {
        job:'FULL STACK DEVELOPER(INTERNSHIP)',
        Software:'  ITSolera',
          duration:'Jan 2026 - Apr 2026',
        responsibilities:[
            'Developed a multi-vendor eCommerce platform using React.js, Node.js, Express.js, and MongoDB',
            'Built reusable frontend components and responsive user interfaces',
            'Implemented authentication and authorization systems',
            'Worked on product management dashboards and REST API integration',
            'Improved application performance and fixed frontend/backend bugs',
            'Collaborated with team members to develop scalable web applications'

        ],

        

    },
    {
        job:'REACT.JS DEVELOPER(INTERNSHIP)',
        Software:'Softsinc Software',
        duration:'Jul 2025 - Aug 2025',
        responsibilities:[
            'Developed an Expense Tracker App using React.js and Firebase',
            'Implemented CRUD operations with real-time database integration',
            'Created analytics charts for daily and monthly expenses',
            'Built a Blogging App with image uploads and real-time comments',
            'Integrated backend APIs using Node.js, Express.js, and MongoDB',
            'Worked on responsive UI design and reusable React components'
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