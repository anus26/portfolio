import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const ContactForm = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message, setMessage] = useState('')
    const [success,setSuccess] =useState('')

    const handleName=(e)=>{

        setName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleMessage=(e)=>{
        setMessage(e.target.value)
    }
    const form= useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6041368', 'template_m7ymoas', form.current, {
            publicKey: 'pfz3jh2czMHR3XXQX',
          })
          .then(
            () => {
          setName('')
          setEmail('')
          setMessage('')
          setSuccess('Email sent successfully')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
        <p className='text-cyan'>{success}</p>
      <form className="flex flex-col gap-4 text-white"  ref={form} onSubmit={sendEmail}>
        <input
        name='form_name'
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={handleName}
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
        name='form_email'
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={handleEmail}
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
        name='message'
          placeholder="Message"
          rows="9"
          cols="50"
          required
          value={message}
          onChange={handleMessage}
          className="rounded-lg bg-lightBrown p-2"
        />
        <button type="submit" className="h- w-full  hover:bg-darkCyan bg-cyan transition-all duration-500 rounded-lg border border-cyan text-white font-bold">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
// service_6041368
