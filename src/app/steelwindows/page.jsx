"use client"
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import SteelWindow from '../../components/SteelWindows'
import { motion } from 'framer-motion'

const SteelWindows = () => {
  return (
    <div className='overflow-hidden'>
      <div className='h-40 w-full mt-12 relative'>
        <Image src={smallBanner}
          className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full '>
          <motion.h1 className='text-2xl md:text-3xl lg:text-5xl text-white w-full text-center uppercase px-5'
            initial={{ y:20, opacity:0 }}
            whileInView={{ y:0, opacity:1 }}
            transition={{ duration:1, ease: 'easeIn'}}>
              Best Choice forever</motion.h1>
        </div>
      </div>
      <div className="py-10 px-5">
        <h2 className='text-center text-xl lg:text-3xl text-red-700 uppercase mb-2'>Why choose Steel Windows?<span className='text-primary text-3xl  ml-1 '>&#x2192;</span></h2>

        <div className='py-3 px-2 container'>
          <motion.p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10'   
              initial={{ x:20, opacity:0 }}
              whileInView={{ x:0, opacity:1 }}
            transition={{ duration:1, ease: 'easeIn'}} >
            why steel windows are becoming a popular choice for many homeowners and builders.
            Steel windows are built to last. Unlike wood, which protect against to pests, steel is an incredibly resilient material. With proper maintenance, steel windows can last for decades, making them a wise long-term investment.
            Weather Resistance: Steel windows withstand severe weather conditions, including heavy rain, snow, and wind without compromising structural integrity.
            Thermal Performance: With advancements in technology, modern steel windows can be manufactured with thermal breaks to enhance their insulation capabilities, helping to reduce energy bills.
            Whether you're renovating your bathroom or constructing a new home, consider steel windows as a stylish and functional choice. Their ability to enhance the natural light in your spaces while promising a long lifespan makes them an appealing option for conscientious homeowners.
            If you ever decide to replace your windows, steel can be reused rather than ending up in a landfill.
            Steel windows have close ties to the industrial design trend. "Steel windows not only bring beauty but a style that withstands the test of time."
          </motion.p>
        </div>
      </div>
      <div className='container'>
        <SteelWindow />
      </div>
    </div>
  )
}

export default SteelWindows