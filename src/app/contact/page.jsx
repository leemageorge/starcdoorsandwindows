
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import ContactForm from '../../components/ContactForm'


const Contact = () => {
  return (
   <div>
         <div className='h-40 w-full mt-12 relative'>
            <Image src={smallBanner}
              className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
              <h1 className='w-full text-2xl lg:text-4xl text-white font-bold text-center px-5 uppercase animate-fade-in-up'>Let's Connect and Make a smart Move</h1>
            </div>
          </div>
          <div className='animate-fade-in-down'>
            <ContactForm />
          </div>
   </div>
  )
}

export default Contact