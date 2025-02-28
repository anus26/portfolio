import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { SiMaterialdesign } from "react-icons/si";
import SingleSkills from './SingleSkills';
import {motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const skills=[
    {
        skill:"HTML",
        icon:FaHtml5 ,
    },
    {
        skill:"CSS",
        icon:FaCss3Alt 
    },
    {
        skill:"JavaScript",
        icon:FaNodeJs 
    },
    {
        skill:"ReactJS",
        icon:RiReactjsLine
    },
    {
        skill:"NextJS",
        icon:TbBrandNextjs 
    },
    {
        skill:"Redux",
        icon:SiRedux 
    },
    {
        skill:"MongoDB",
        icon:SiMongodb 
    },
    
        {
        skill:"TailwindCSS",
        icon:SiTailwindcss 
    },
       {
         skill:"Bootstrap",
        icon:FaBootstrap
    },
    {
        skill:"Material UI",
        icon:SiMaterialdesign 

    },
    {
        skill:"Shadcn",
        icon:SiShadcnui
    },

]

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
    {skills.map((item,index)=>{
        return(
        <motion.div
            variants={fadeIn('up',`0.${index}`)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false,amount:0}}
        >

         <SingleSkills key={index} text={item.skill}  imgSvg={<item.icon/>}/>
        </motion.div>
    )
})}
</div>
    </div>
  )
}

export default AllSkills