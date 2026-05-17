import React from 'react'

const SubHeroSection = () => {
  return (
    <div
      className="
      w-full
      border-y border-lightGrey
      bg-brown
      text-lightGrey
      uppercase
      py-4 sm:py-5 md:py-6 lg:py-8
      overflow-hidden
      sm:m-24
    "
    >

      <div
        className="
        w-full
       
        flex flex-col sm:flex-row
        justify-center sm:justify-around
        items-center
        gap-4 sm:gap-6 md:gap-10
        text-center
        px-4
        text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl
      "
      >

        <p className="whitespace-nowrap">
          Fast Learner
        </p>

        <p className="s whitespace-nowrap">
          Team Work
        </p>

        <p className="whitespace-nowrap">
          Details Master
        </p>

      </div>

    </div>
  )
}

export default SubHeroSection