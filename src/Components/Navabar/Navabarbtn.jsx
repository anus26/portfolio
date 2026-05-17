import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const Navabarbtn = () => {
  return (
    <a
      href="https://www.canva.com/design/DAGwuvleuv0/wP1ca7gVwZgeJ048yOU2Bg/edit?utm_content=DAGwuvleuv0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="
        px-3 sm:px-4 md:px-5
        py-2
        rounded-full
        text-white
        text-sm sm:text-base
        font-bold
        flex items-center
        gap-1 sm:gap-2
        border border-cyan
        bg-gradient-to-r from-darkCyan to-orange
        transition-all duration-500
      hover:scale-100 md:hover:scale-105
        hover:border-orange
        hover:shadow-cyanShadow
        cursor-pointer
        whitespace-nowrap
      "
      >
        Hire Me

        <div className="hidden sm:block">
          <FiArrowDownRight />
        </div>

      </button>
    </a>
  )
}

export default Navabarbtn