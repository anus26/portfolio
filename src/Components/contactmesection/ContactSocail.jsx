import React from 'react'
import SingleContact from './SingleContact'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const ContactSocail = () => {
  return (
    <div className='flex gap-4 '>
        <SingleContact Link='#' Icon={FaGithub}/>
        <SingleContact Link='#' Icon={CiLinkedin}/>
    </div>
  )
}

export default ContactSocail