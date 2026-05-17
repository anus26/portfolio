import React from 'react'
import { LiaVaadin } from 'react-icons/lia'


const links=[
    {link:"About ME",section:"about"},
    {link:"Skills",section:"skills"},
    {link:"Experience",section:"experience"},
    {link:"Projects",section:"projects"},
    {link:"Contact",section:"contact"},


]

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightGrey mt-24 '></div>
        <div className='hidden md:flex justify-between mt-4 w-full
max-w-[1100px]
mx-auto
px-4 sm:px-6 lg:px-8
'>
            <p className='text-3xl text-lightGrey'>
            Anus Raza
            </p>
            <ul className='flex gap-4 text-lightGrey text-xl'>
                {links.map((item,index)=>{
                    return(
                       <li key={index}>
                        <a href={"#"+item.section}>{item.link}</a>

                       </li>
                    )
                    })}
            </ul>
            </div>
            <p className='w-full max-w-[1100px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown'>e 2025 Anus Raza | All rights Reserved</p>
    </div>
  )
}

export default FooterMain