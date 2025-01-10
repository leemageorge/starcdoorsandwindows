"use client"

import React from 'react'
import Image from 'next/image'
import SteelDoor from "../assets/images/product1.webp"
import MembaraneDoors from "../assets/images/product5.webp"
import FibreDoors from "../assets/images/product2.webp"
import WFrame from "../assets/images/product3.webp"
import Link from 'next/link'
import { motion } from 'framer-motion'


const productCards = [
  {
    id:1,
    title: "Steel Doors",
    src:SteelDoor,
    url:"/steeldoors",
     button: "Explore More"
  },
  {
    id:2,
    title: "Fibre/FRP Doors",
    src:MembaraneDoors,
     url:"/frpdoors",
     button:  "Explore More"
  },
  {
    id:3,
    title: "Membrane Doors",
    src:FibreDoors,
     url:"/membranedoors",
     button: "Explore More"
  },
  {
    id:4,
    title: "Steel Windows",
    src:WFrame,
     url:"/steelwindows",
     button:  "Explore More"
  },
]
const Product = () => {
  return (
    <motion.div className='container mt-12 '
       initial={{x:-100, opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        transition={{duration:1, ease: 'easeIn' }}>
      <div className='rounded-md shadow-lg py-2 bg-cardBg PX-2'>
       <motion.h2 className='text-center text-xl lg:text-3xl text-secondary  mb-6 md:mb-6 mt-2 uppercase' 
        initial={{x:-100, opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration:1, ease: 'easeIn' }}>We Are Ready To Supply <span className='text-secondary font-extrabold ml-3 text-4xl'>&#x2192;</span></motion.h2>
      <div className='flex flex-wrap gap-4 lg:gap-6 justify-center '>
        {
          productCards.map((productCard)=>(
            <motion.div  className='relative' key={productCard.id} >    
            <Link className='cursor-pointer py-2 lg:py-4 px-1' key={productCard.id} href={productCard.url} >
            <motion.div className='text-center text-xl text-secondary cursor-pointer mb-6 hover:text-slate-300 uppercase'
                initial={{x:-100, opacity: 0 }}
                whileInView={{x:0, opacity: 1 }}
                transition={{duration:1, ease: 'easeIn' }}>
              {productCard.title}
            </motion.div>
               <Image src={productCard.src} alt={productCard.title} className='w-64 h-auto object-cover rounded-lg shadow-lg'/>
               <div className='text-center text-lg text-opacity-30 text-white hover:text-secondary cursor-pointer font-bold mt-4 hover:bg-red-700  py-1 absolute top-1/2 w-full hover:bg-opacity-80 shadow-md'>{productCard.button}</div>
           </Link>
             </motion.div>
          ))
        }
    </div>

    </div>
    </motion.div>
  )
}

export default Product