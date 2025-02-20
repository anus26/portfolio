import React from 'react' 
import { FiArrowDownRight } from "react-icons/fi";
const Navabarbtn = () => {
  return (
   <button className='px-4 py-2 rounded-full text-white text-wl font-bold  flex items-center gap-1 border-cyan border bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange   hover:shadow-cyanShadow cursor-pointer'>
    Hire Me
    <FiArrowDownRight />
   </button>
  )
}

export default Navabarbtn