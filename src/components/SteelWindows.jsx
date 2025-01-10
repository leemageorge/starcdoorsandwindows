"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import W2 from "../assets/images/w2.webp"
import W3 from "../assets/images/w3.webp"
import W4 from "../assets/images/w4.webp"
import W5 from "../assets/images/w5.webp"
import W6 from "../assets/images/w6.webp"
import W7 from "../assets/images/w7.webp"
import W8 from "../assets/images/w8.webp"
import W9 from "../assets/images/w9.webp"
import W10 from "../assets/images/w10.webp"
import W11 from "../assets/images/w11.webp"
import W12 from "../assets/images/w12.webp"
import W13 from "../assets/images/w13.webp"
import W14 from "../assets/images/w14.webp"
import W15 from "../assets/images/w15.webp"
import W16 from "../assets/images/w16.webp"
import W17 from "../assets/images/w17.webp"
import W18 from "../assets/images/w18.webp"
import W19 from "../assets/images/w19.webp"
import W20 from "../assets/images/w20.webp"
import W21 from "../assets/images/w21.webp"
import W22 from "../assets/images/w22.webp"
import W23 from "../assets/images/w23.webp"
import W24 from "../assets/images/w24.webp"
import W25 from "../assets/images/w25.webp"
import W26 from "../assets/images/w26.webp"
import W27 from "../assets/images/w27.webp"

import { motion} from 'framer-motion';

const steelWindows = [

  {id:2,src: W2},
  {id:3,src: W3},
  {id:4,src: W4},
  {id:5,src: W5},
  {id:6,src: W6},
  {id:7,src: W7},
  {id:8,src: W8},
  {id:9,src: W9},
  {id:10,src: W10},
  {id:11,src: W11},
  {id:12,src: W12},
  {id:13,src: W13},
  {id:14,src: W14},
  {id:15,src: W15},
  {id:16,src: W16},
  {id:17,src: W17},
  {id:18,src: W18},
  {id:19,src: W19},
  {id:20,src: W20},
  {id:21,src: W21},
  {id:22,src: W22},
  {id:23,src: W23},
  {id:24,src: W24},
  {id:25,src: W25},
  {id:26,src: W26},
  {id:27,src: W27},
]
const SteelWindow = () => {
    const [zoomImage, setZoomImage] = useState(false);
    
        const handleImgClick = (imgSrc) => {
          setZoomImage(imgSrc);
        };
        
      
  return (
        <div className='flex flex-col gap-5'>
          {/* <h2 className='text-2xl font-bold text-primary uppercase tracking-wide text-center'>Steel Windows<span className='text-red-700 font-extrabold ml-3 '>&#x2192;</span></h2> */}
          <div className='flex flex-wrap gap-5 items-center justify-center'>
      {
       steelWindows.map((steelWindow)=>(
          <motion.div href='#' className='w-80 h-auto cursor-pointer bg-gray-100 ' key={steelWindow.id} onClick={()=> handleImgClick(steelWindow.src)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeIn' }}>
            <Image src={steelWindow.src} alt="Steel Doors" className='w-full h-full object-contain rounded-lg shadow-md' />
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

export default SteelWindow