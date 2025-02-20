import React from 'react'

const links=[
    {link:"About ME",section:"about"},
    {link:"Skills",section:"skills"},
    {link:"Experience",section:"experiencce"},
    {link:"Projects",section:"porjects"},
    {link:"Contact",section:"contact"},


]

const NavabarLink = () => {

  return (
   <ul className='flex gap-5 text-white fond-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg-text-md sm:text-xl  sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm-w-full py-19'>
    {links.map((link,index)=>{
        return(
            <li key={index} className='group'>
            <a href="#" className='cursor-pointer text-white hover:text-cyan trasition-all duration-500'>{link.link}</a>
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        )
    })}
   </ul>
  )
}

export default NavabarLink