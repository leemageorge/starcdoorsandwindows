"use client"
import React from 'react'
import Image from 'next/image'

import Guarantee from "../assets/icons/guarantee.svg"
import Happy from "../assets/icons/happy.svg"
import Service from "../assets/icons/service.svg"
import Maintenance from "../assets/icons/maintenance.svg"
import Installation from "../assets/icons/installation.svg"
import Feedback from "../assets/icons/feedback.svg"
import { motion } from 'framer-motion'

const featureCards = [
  {
    id:1,
    title: "Guarantee",
    description:"100% Genuine Product",
    src:Guarantee
  },
  {
    id:2,
    title: "100K+",
    description:"Happy Customers",
    src:Happy 
  },
  {
    id:3,
    title: "Client Support",
    description:"Feel free to call us any time",
    src:Service
  },
  {
    id:4,
    title: "Maintenance and Repair",
    description:"100% Guarantee Service",
    src:Maintenance
  },
  {
    id:5,
    title: "Installation support",
    description:"Our team provide support",
    src:Installation
  },
  {
    id:6,
    title: "Customer Feedback",
    description:"75k+ satisfied customer reviews",
    src:Feedback
  },

]

const Feature = () => {
  return (
    <div className="overflow-hidden relative w-full min-h-screen">
      <div className='absolute top-0 left-0 w-full min-h-screen h-full bg-black bg-opacity-50 shadow-lg rounded-md'></div>  
      <div className='bg-fixed bg-parallax min-h-screen  h-full flex items-center justify-center shadow-lg rounded-md '>
        <div className='flex flex-wrap gap-6 items-center justify-center py-4'>
          {
            featureCards.map((featureCard)=>(
              <motion.div className='bg-secondary py-5 px-4 rounded-md flex-none w-[300px] z-10 flex flex-col items-center' key={featureCard.id}
                initial={{y:-100, opacity: 0 }}
                whileInView={{y:0, opacity: 1 }}
               transition={{duration:2, ease: 'easeIn' }}>
                <motion.div  initial={{x:-100, opacity: 0 }}
                whileInView={{x:0, opacity: 1 }}
                transition={{duration:2, ease: 'easeIn' }} >
                <Image src={featureCard.src} className='w-12' alt={featureCard.title}/>
                </motion.div>
                <h2 className='font-bold text-xl text-primary '>{featureCard.title}</h2>
                <p className='text-red-700  text-center'>{featureCard.description}</p>
        
              </motion.div>
            ))
          }
          </div>
      </div>
    </div>
  )
}

export default Feature