"use client"
import Link from 'next/link'
import React from 'react'
// import TestimonialSlider from './TestimonialSlider'
import ReviewSlider from './ReviewSlider'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div className=' mt-12 relative py-8 overflow-hidden'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, ease: 'easeIn',delay:.5 }}>
       <div className='absolute top-0 left-0 w-full h-full bg-blue-950 bg-opacity-80 shadow-lg rounded-md  text-white'></div>  
        <div className='lg:bg-fixed bg-reviewBanner bg-cover h-auto flex items-center justify-center shadow-lg rounded-md py-6'>
        <div className='flex flex-col items-center gap-4 z-10'>
        <motion.h2 className='text-xl lg:text-3xl text-white capitalize font-bold tracking-widest text-center'
        initial={{ y:-60,opacity: 0 }}
        whileInView={{ y:0,opacity: 1 }}
        transition={{ duration:1, ease: 'easeIn',delay:.2 }}>What Our Clients Say<span className=' font-extrabold ml-3 text-white '
        >&#x2192;</span> </motion.h2>
       <motion.p className='text-center text-sm lg:text-lg text-gray-100 w-3/4 mx-auto' initial={{ x:-100,opacity: 0 }}
        whileInView={{ x:0,opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn',delay:.2 }}>We received valuable feedback from our customers showing the positive impact of our services. We are grateful for the trusted clients with us. To know more our compamy <Link href='/about' className='cursor-pointer text-white text-opacity-30 text-xl font-bold'><span className=''> Click here &#x21d7; </span> </Link></motion.p>
        <motion.div className='mt-6 overflow-hidden' initial={{ x:-100,opacity: 0 }}
        whileInView={{ x:0,opacity: 1 }}
        transition={{ duration:1, ease: 'easeIn',delay:.2 }}>
          <ReviewSlider />
        </motion.div>
     <div className='mt-6 text-center'>
     <motion.h3 className='text-lg md:text-2xl text-center text-white 'initial={{ y:60,opacity: 0 }}
        whileInView={{ y:0,opacity: 1 }}
        transition={{ duration:1, ease: 'easeIn',delay:.2 }}>If you have Interested Please Feel Free To Contact Us</motion.h3>
     <Link href='/contact' >
     <button className='py-1 px-6 mt-4 rounded-lg  font-extrabold bg-transparent border text-white hover:bg-white hover:text-red-700'>Connect Us</button>
     </Link>
     </div>
      </div> 
      </div>
      </motion.div>                   
    
  )
}

export default Testimonials