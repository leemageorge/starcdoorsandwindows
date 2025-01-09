"use client"

import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import SteelDoor from '../../components/SteelDoors'
import SteelDoorFeature from '../../components/SteelDoorFeature'
import { motion } from 'framer-motion'

const SteelDoors = () => {

  return(
    <div className='overflow-hidden' >
      <div className='h-40 w-full mt-12 relative'>
         <Image src={smallBanner}
            className="absolute top-0 left-0 w-full h-full rounded-md object-cover" alt="banner Image" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full '>
      <motion.h1 className='w-full text-lg md:text-2xl lg:text-4xl text-white font-bold capitalize text-center'  
            initial={{ x:20, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration:1, ease: 'easeIn', delay:.2 }}>Discover the power of steel in every step</motion.h1>
  </div>
  </div>
  <div className=" container py-10 px-5">
        <motion.h2 className='text-center text-3xl text-red-700 font-bold mb-4' 
             initial={{ x:-40, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration:1, ease: 'easeIn',delay:.2 }} >Why choose Steel Doors ?<span className='text-primary font-extrabold ml-3 '>&#x2192;</span></motion.h2>
      
           <div className=' py-3 px-2 '>
           <motion.p className='text-justify px-5 py-3 text-gray-500 text-xl leading-10'
            initial={{ x:60, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration:1, ease: 'easeIn', delay:.2 }}>
           Steel doors stand out in the market for several reasons. Their unique composition
           and manufacturing processes provide a combination of strength, durability, 
           and energy efficiency that other materials struggle to match.
          Steel doors are low-maintenance, durable, and fire-retardant compared to other doors. 
          They provide excellent protection against pests and withstand all weather conditions effectively.
          One of the most compelling reasons to choose a steel door is its impressive security features. 
          Steel is inherently stronger than wood or fiberglass, which makes it harder to break into.
          Intrusion Resistance: Steel doors often include reinforced frames and specialized locking mechanisms, adding layers of protection against unauthorized entry.
         Fire Resistance: Many steel doors are fire-rated, meaning they can withstand high temperatures for an extended period, providing additional peace of mind in emergencies.
            </motion.p>
           </div>
       
      </div>
      <div className='container mb-6'>
        <SteelDoor />
      </div>
      <div className=' mb-6'>
        <SteelDoorFeature />
      </div>
    </div>
      
  )
}

export default SteelDoors