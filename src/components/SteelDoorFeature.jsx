"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import LowMaintenance from "../assets/icons/low-maintenace.svg"
import Security from "../assets/icons/security.svg"
import Durability from "../assets/icons/durability.svg"
import EasyMaintenance from "../assets/icons/easy-maintenance.svg"
import UVprotected from "../assets/icons/uvprotected.svg"
import MuliLockSystem from "../assets/icons/multilock.svg"
import Noise from "../assets/icons/noise.svg"
import FireResistant from "../assets/icons/fireresistant.svg"
import WeatherResistant from "../assets/icons/weatherresistant.svg"
import DesignDoors from "../assets/icons/designdoors.svg"
import EcoFriendly from "../assets/icons/ecofriendly.svg"

const steelFeatureCards = [
    {
      id:1,
      title: "Low Maitenance",
      description:"No need for painting and staining",
      src:LowMaintenance
    },
    {
      id:2,
      title: "Security",
      description:"Provides additional security for your homes or building",
      src:Security
    },
    {
      id:3,
      title: "Durability",
      description:" Hinges, handles, and locks made from stainless steel or brass.",
      src:Durability
    },
    {
      id:4,
      title: "Easy Maintenance",
      description:"Simple replacement of worn-out parts, like hinges and handles",
      src:EasyMaintenance
    },
    {
      id:5,
      title: "UVprotected",
      description:"Prevents damage from the sun's UV rays.",
      src:UVprotected
    },
    {
      id:6,
      title: "Muli-Point Locking System",
      description:"Providing enhanced security and stability.",
      src:MuliLockSystem
    },
    {
        id:7,
        title: "Noise Reduction",
        description:"reduce external noise by up to 80%,",
        src: Noise
      },
      {
        id:8,
        title: "Fire Resistant",
        description:"To slow the spread of fire and provide a safe environment",
        src:FireResistant
      },
      {
        id:9,
        title: "Weather Resistant",
        description:"Protection against harsh weather conditions",
        src:WeatherResistant
      },
      {
        id:10,
        title: "Design & Size Option",
        description:"Sleek and classic designs with rich and neutral colors",
        src:DesignDoors
      },
      {
        id:11,
        title: "Eco-Friendly",
        description:"Recycled materials and energy-efficient designs",
        src:EcoFriendly
      },
  
  ]


const SteelDoorFeature = () => {
  return (
   <div className="overflow-hidden relative w-full min-h-screen">
         <div className='bg-fixed bg-steelDoorFeature bg-cover min-h-screen  h-full flex items-center justify-center shadow-lg rounded-md '>
           <div className='flex flex-wrap gap-6 items-center justify-center py-4'>
             {
               steelFeatureCards.map((steelFeatureCard)=>(
                 <motion.div className='bg-secondary py-5 px-4 rounded-md flex-none w-[300px] z-10 flex flex-col items-center' key={steelFeatureCard.id}
                   initial={{y:-100, opacity: 0 }}
                   whileInView={{y:0, opacity: 1 }}
                  transition={{duration:2, ease: 'easeIn' }}>
                   <motion.div  initial={{x:-100, opacity: 0 }}
                   whileInView={{x:0, opacity: 1 }}
                   transition={{duration:2, ease: 'easeIn' }} >
                   <Image src={steelFeatureCard.src} className='w-12' alt={steelFeatureCard.title}/>
                   </motion.div>
                   <h2 className='font-bold text-xl text-primary '>{steelFeatureCard.title}</h2>
                   <p className='text-red-700  text-center'>{steelFeatureCard.description}</p>
           
                 </motion.div>
               ))
             }
             </div>
         </div>
       </div>
  )}
export default SteelDoorFeature