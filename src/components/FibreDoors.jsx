"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import F1 from "../assets/images/f1.webp"
import F2 from "../assets/images/f2.webp"
import F3 from "../assets/images/f3.webp"
import F4 from "../assets/images/f4.webp"
import F5 from "../assets/images/f5.webp"
import F6 from "../assets/images/f6.webp"
import F7 from "../assets/images/f7.webp"
import F8 from "../assets/images/f8.webp"
import F9 from "../assets/images/f9.webp"
import F10 from "../assets/images/f10.webp"
import F11 from "../assets/images/f11.webp"
import F12 from "../assets/images/f12.webp"
import F13 from "../assets/images/f13.webp"
import F14 from "../assets/images/f14.webp"
import F15 from "../assets/images/f15.webp"
import F16 from "../assets/images/f16.webp"
import F17 from "../assets/images/f17.webp"
import F18 from "../assets/images/f18.webp"
import F19 from "../assets/images/f19.webp"
import F20 from "../assets/images/f20.webp"
import F21 from "../assets/images/f21.webp"
import F22 from "../assets/images/f22.webp"
import F23 from "../assets/images/f23.webp"
import F24 from "../assets/images/f24.webp"
import F25 from "../assets/images/f25.webp"
import F26 from "../assets/images/f26.webp"
import F27 from "../assets/images/f27.webp"

const fibreDoors = [
  {id:1,src: F1},
  {id:2,src: F2},
  {id:3,src: F3},
  {id:4,src: F4},
  {id:5,src: F5},
  {id:6,src: F6},
  {id:7,src: F7},
  {id:8,src: F8},
  {id:9,src: F9},
  {id:10,src: F10},
  {id:11,src: F11},
  {id:12,src: F12},
  {id:13,src: F13},
  {id:14,src: F14},
  {id:15,src: F15},
  {id:16,src: F16},
  {id:17,src: F17},
  {id:18,src: F18},
  {id:19,src: F19},
  {id:20,src: F20},
  {id:21,src: F21},
  {id:22,src: F22},
  {id:23,src: F23},
  {id:24,src: F24},
  {id:25,src: F25},
  {id:26,src: F26},
  {id:27,src: F27},
]
const FibreDoors = () => {
    const [zoomImage, setZoomImage] = useState(false);
    
        const handleImgClick = (imgSrc) => {
          setZoomImage(imgSrc);
        };
        
      
  return (
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-bold text-primary uppercase tracking-wide text-center'>Fibre/BathRoom Doors<span className='text-red-700 font-extrabold ml-3 '>&#x2192;</span></h2>
          <div className='flex flex-wrap gap-5 items-center justify-center'>
      {
       fibreDoors.map((fibreDoor)=>(
          <a href='#' className='w-80 h-auto cursor-pointer bg-gray-100 ' key={fibreDoor.id} onClick={()=> handleImgClick(fibreDoor.src)}>
            <Image src={fibreDoor.src} alt="Steel Doors" className='w-full h-full object-contain rounded-lg shadow-md' />
          </a>
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

export default FibreDoors
