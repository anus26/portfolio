import React from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import SingleInfo from './SingleInfo';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
<SingleInfo text="anusraza268@gmail.com" Image={MdOutlineMailLock}/>
<SingleInfo text="0306-8933660" Image={FaPhoneAlt}/>
<SingleInfo text="Pakistan ,karachi" Image={IoLocation}/>
    </div>
  )
}

export default ContactInfo