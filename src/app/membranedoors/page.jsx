'use client'
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import MembraneDoors from '../../components/MembraneDoors'
import { motion } from 'framer-motion'

const MembraneDoorsPage = () => {
  return (
    <div >
      <div className='h-40 w-full mt-12 relative'>
        <Image src={smallBanner}
          className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
          <motion.h1 className='w-full text-xl md:text-2xl lg:text-4xl text-white font-medium  uppercase text-center px-5'
           initial={{ y:20, opacity: 0 }}
           whileInView={{ y:0, opacity: 1 }}
           transition={{ duration:1, ease: 'easeIn'}}>
            Stylish Your Home its our concern</motion.h1>
        </div>
      </div>
      <div className="py-10 px-5">
        <motion.h2 className='text-center text-lg lg:text-3xl text-red-700 uppercase  mb-4' 
         initial={{ x:-40, opacity: 0 }}
         whileInView={{ x:0, opacity: 1 }}
         transition={{ duration:1, ease: 'easeIn'}} >
          Why choose Membrane Doors ?<span className='text-primary font-extrabold ml-3'>&#x2192;</span></motion.h2>

        <div className='py-3 px-2 container'>
          <motion.p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10'
          initial={{ x:60, opacity: 0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration:1, ease: 'easeIn', delay:.2 }}>
            In modern types of residential houses for a neat and smooth finishing membrane doors are best choice.
            Why Membrane Doors are choose Minimizing energy loss
            Reduction of all forms of sound pollution
            Enhancing the level of durability
            Reduction of the maintenance costs
            Providing a variety of appealing designs.
            They are however not ideal for some other applications such as those that require high levels of safety and sound proofing.
          </motion.p>
        </div>

      </div>
      <div className='container'>
        <MembraneDoors />
      </div>
    </div>

  )
}

export default MembraneDoorsPage