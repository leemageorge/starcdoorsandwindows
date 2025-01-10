"use client"
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import FibreDoors from '../../components/FibreDoors'
import { motion } from 'framer-motion'

const FRPDoors= () => {
  return(
    <div className='overflow-hidden'>
      <div className='h-40 w-full mt-12 relative'>
         <Image src={smallBanner}
                className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
      <motion.h1 className='w-full text-2xl md:text-2xl lg:text-4xl text-white font-medium  uppercase text-center'
      initial={{ x:-20, opacity: 0 }}
      whileInView={{ x:0, opacity: 1 }}
      transition={{ duration:1, ease: 'easeIn'}}>
        Make Your Bathroom Stylish</motion.h1>
  </div>
  </div>
  <div className="py-10 px-5 container px-5">
        <motion.h2 className='text-center text-3xl text-red-700 uppercase  mb-4'
         initial={{ x:-40, opacity: 0 }}
         whileInView={{ x:0, opacity: 1 }}
         transition={{ duration:1, ease: 'easeIn'}}  >
          The Beauty and Benefits of Fibre Doors<span className='text-primary font-extrabold ml-3 '>&#x2192;</span></motion.h2>
      
           <div className=' py-3 px-2'>
           <motion.p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10'
           initial={{ x:60, opacity: 0 }}
           whileInView={{ x:0, opacity: 1 }}
           transition={{ duration:1, ease: 'easeIn', delay:.2 }}>
             Fibre doors, also known as fiberglass doors, 
           are made from reinforced plastic fibers combined with resins. 
           Fibre doors are an excellent choice for bathrooms, blending durability, 
           aesthetic appeal, and low maintenance in one package. If you're considering a
            bathroom renovation or simply want to upgrade your door, think about incorporating
             fibre doors into your plans. Their unique advantages may just be the solution 
             you're looking for to enhance both functionality and style in your bathroom.
            </motion.p>
           </div>
       
      </div>
      <div className='container'>
        <FibreDoors />
      </div>
    </div>
      
  )
}

export default FRPDoors