import React from 'react' 
import { FiArrowDownRight } from "react-icons/fi";
const Navabarbtn = () => {
  return (
    <a  
    href="https://www.canva.com/design/DAGJ3wqHCxU/2DKYDScUBq_SxW2UOgpgOQ/view?utm_content=DAGJ3wqHCxU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h89b4de7ff7"  
    target="_blank"  
    rel="noopener noreferrer"
  >
   <button className='px-4 py-2 rounded-full text-white text-wl font-bold  flex items-center 
   gap-1 border-cyan border bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 
   hover:scale-110 hover:border-orange   hover:shadow-cyanShadow cursor-pointer'>
Hire me


    <div className='sm:hidden md:block'>
    <FiArrowDownRight  />
    </div>

   </button>
     </a>
  )
}

export default Navabarbtn