import React from 'react'
import { FaGithub, FaLinkedinIn, FaMailBulk, FaMailchimp, FaMedium, FaMediumM, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      <h1 className="text-5xl font-bold underline font-serif  mb-4 justify-center flex ">Connect with Me</h1>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-center items-center h-40">
      <div className="  ">
        <a href="https://github.com/selvakisar" className="text-red-700 hover:text-emerald-600  text-2xl flex mx-2" target="_blank" rel="noopener noreferrer">
        <FaGithub className=' text-black'/>
          
          GitHub 
        </a>
        </div>
       <div>
       <a href="https://www.linkedin.com/in/selvamani-k-873781281/" className="text-red-700 hover:text-emerald-600  text-2xl flex " target="_blank" rel="noopener noreferrer">
       <FaLinkedinIn className='mx-2 text-black '/>
          
          LinkedIn
         
        </a>
       </div>
              <div>
        <a href="mailto:selvamern@gmail.com" className="text-red-700 hover:text-emerald-600  text-2xl flex">
        <FaMailchimp className='mx-2 text-black '/> 
        selvanmern@gmail.com

        </a>
        </div>
       <div>
       <a href="tel:+1234567890" className="text-red-700 hover:text-emerald-600  text-2xl flex">
          <FaPhone className='mx-2 text-black ' />9659530953
        </a>
       </div>
  
    </div>
    </div>
  )
}
