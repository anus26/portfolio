import React from 'react'
import ProjectText from './ProjectText.jsx'
import SingleProject from './SingleProject.jsx'
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const projects=[{
    name:'Bloging App',
    year:'Dec 2025',
    align:'right',
    image:'/images/website-img-1.jpg',
    link:'https://comment-react.vercel.app'
},
{
    name:'E-commerce App',
    year:'Dec 2024',
    align:'right',
    image:'/images/website-img-1.jpg',
    link:'https://vite-project-final.vercel.app'  
},
{
    name:'Weather-App',
    year:'Dec 2024',
    align:'right',
    image:'/images/website-img-1.jpg',
    link:'#'
},
{
    name:'memes',
    year:'Dec 2025',
    align:'right',
    image:'/images/website-img-1.jpg',
    link:'#'
}
]

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
                 variants={fadeIn('up',0.2)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once:false,amount:0}}
                        >

     <ProjectText/>
      </motion.div>
   <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
    {projects.map((item,index)=>{
        return <SingleProject key={index} name={item.name} yerar={item.year} aling={item.align} image={item.image} link={item.link}/>
    })}
   </div>
    </div>
  )
}

export default ProjectMain