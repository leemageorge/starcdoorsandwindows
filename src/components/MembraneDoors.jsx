"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import M1 from "../assets/images/m1.webp"
import M2 from "../assets/images/m2.webp"
import M3 from "../assets/images/m3.webp"
import M4 from "../assets/images/m4.webp"
import M5 from "../assets/images/m5.webp"
import M6 from "../assets/images/m6.webp"
import M7 from "../assets/images/m7.webp"
import M8 from "../assets/images/m8.webp"
import M9 from "../assets/images/m9.webp"
import M10 from "../assets/images/m10.webp"
import M11 from "../assets/images/m11.webp"
import M12 from "../assets/images/m12.webp"
import M13 from "../assets/images/m13.webp"
import M14 from "../assets/images/m14.webp"
import M15 from "../assets/images/m15.webp"

import { motion} from 'framer-motion';

const membraneDoors = [
  {id:1,src: M1},
  {id:2,src: M2},
  {id:3,src: M3},
  {id:4,src: M4},
  {id:5,src: M5},
  {id:6,src: M6},
  {id:7,src: M7},
  {id:8,src: M8},
  {id:9,src: M9},
  {id:10,src: M10},
  {id:11,src: M11},
  {id:12,src: M12},
  {id:13,src: M13},
  {id:14,src: M14},
  {id:15,src: M15},
]
const MembraneDoors = () => {
    const [zoomImage, setZoomImage] = useState(false);
    
        const handleImgClick = (imgSrc) => {
          setZoomImage(imgSrc);
        };
        
      
  return (
        <div className='flex flex-col gap-5'>
          {/* <h2 className='text-2xl font-bold text-primary uppercase tracking-wide text-center'>Fibre/BathRoom Doors<span className='text-red-700 font-extrabold ml-3 '>&#x2192;</span></h2> */}
          <div className='flex flex-wrap gap-5 items-center justify-center'>
      {
     membraneDoors.map((membraneDoor)=>(
          <motion.div href='#' className='w-80 h-auto cursor-pointer bg-gray-100 ' key={membraneDoor.id} onClick={()=> handleImgClick(membraneDoor.src)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeIn' }}>
            <Image src={membraneDoor.src} alt="Steel Doors" className='w-full h-full object-contain rounded-lg shadow-md' />
          </motion.div>
        ))
      }
      </div>
      {zoomImage && (
            <div
              className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex items-center justify-center'
            >
              <Image
                src={zoomImage}
                alt='Zoomed Image'
                className='max-w-4xl max-h-4xl object-contain rounded-lg shadow-md'
              />
              <button
                className='absolute top-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => setZoomImage(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
  )
}

export default MembraneDoors 
