import React from 'react'
import ContactFoam from './ContactFoam.jsx'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4 '>Get in touch</h2>
            <p className='text-white'>Fell free reach out of you id like to collaborate 
                <br />
                you are just a few clicks away!
            </p>
        </div>
        <ContactFoam/>
    </div>
  )
}

export default ContactMeLeft