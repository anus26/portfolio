import React from 'react'

const SingleContact = ({Icon,Link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center'>
        <a href={Link} className='cursor-pointer' >
            <Icon />
        </a>
    </div>
  )
}

export default SingleContact