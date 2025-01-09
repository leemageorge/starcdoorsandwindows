'use client'
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import ContactForm from '../../components/ContactForm'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
   <div>
         <div className='h-40 w-full mt-12 relative'>
            <Image src={smallBanner}
              className="absolute top-0 left-0 w-full h-full rounded-md object-cover" alt="banner Image" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
              <motion.h1 className='w-full text-2xl lg:text-4xl text-white font-bold text-center'
              initial={{ y:20, opacity:0 }}
              whileInView={{ y:0, opacity:1 }}
              transition={{ duration:1, ease: 'easeIn'}}>Let's Connect and Make a smart Move  </motion.h1>
            </div>
          </div>
          <motion.div
           initial={{ x:40, opacity:0 }}
           whileInView={{ x:0, opacity:1 }}
           transition={{ duration:1, ease: 'easeIn'}}>
            <ContactForm />
          </motion.div>
   </div>
  )
}

export default Contact