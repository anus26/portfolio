import React from 'react'
import ContactInfo from './ContactInfo.jsx'
import ContactSocail from './ContactSocail.jsx'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
    <img src="/images/email-image (1).png" 
    alt="email image" 
     className='max-w-[300px]'/>
     <ContactInfo/>
     <ContactSocail/>
</div>
  )
}

export default ContactMeRight