import React from 'react'

const ExperienceInfo = ({number,text}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='font-bold text-6xl text-cyan'>{number}</p>
        <p className='font-bold textt-xl text-lightGray uppercase'>{text}</p>
    </div>
  )
}

export default ExperienceInfo