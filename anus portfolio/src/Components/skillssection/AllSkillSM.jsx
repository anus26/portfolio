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
import { DiVim } from 'react-icons/di';
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

const AllSkillSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>

        {skills.map((item,index)=>{

            return <motion.div 
                         variants={fadeIn('up',0.2)}
                             initial='hidden'
                             whileInView='show'
                             viewport={{once:false,amount:0}}
            key={index} className='flex  flex-col items-center'> 
            <item.icon className='text-7xl text-orange'/>
            <p className='text-center mt-4  text-white'>{item.skill}</p></motion.div>
        })
        
        }</div>
  )
}

export default AllSkillSM