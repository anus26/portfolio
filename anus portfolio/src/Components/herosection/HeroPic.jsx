import React from 'react'
import { FiHexagon } from "react-icons/fi";
const HeroPic = () => {
  return (
    <div className='h-ful flex items-center justify-center'>
        <img src="../../public/images/Untitled design (1).png" alt="Anus Raza" className='max-h-[410px] w-auto rounded-full' />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>

        <FiHexagon className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear-infinite]' />
        </div>
    </div>
  )
}

export default HeroPic