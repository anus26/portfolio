import React from 'react'
import { Link } from 'react-scroll'
const links=[
    {link:"About ME",section:"about"},
    {link:"Skills",section:"skills"},
    {link:"Experience",section:"experience"},
    {link:"Projects",section:"projects"},
    {link:"Contact",section:"contact"},


]

const NavabarLink = () => {

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
    {links.map((link,index)=>{
        return(
            <li key={index} className='group'>
            <Link 
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={true}
            className='cursor-pointer text-white hover:text-cyan trasition-all duration-500'>{link.link}</Link>
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        )
    })}
   </ul>
  )
}

export default NavabarLink