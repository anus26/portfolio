import React from 'react'
import ContactMeLeft from './ContactMeLeft.jsx'
import ContactMeRight from './ContactMeRight.jsx'

const ContactMeMain = () => {
  return (
    <div id='contact'  className='w-full
max-w-[1300px]
mx-auto
px-4 sm:px-6 lg:px-8
 items-center justify-center mt-[100px] sm:m-24'> 
        <h2 className='text-3xl sm:text-4xl md:text-6xl text-cyan mb-10 text-center'>
Contact Me
        </h2>
        <div className='flex justify-between gap-8 md:gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col'>
            <ContactMeLeft/>
            <ContactMeRight/>
        </div>
    </div>
  )
}

export default ContactMeMain 