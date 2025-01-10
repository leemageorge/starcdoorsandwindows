
"use client"
import { useState } from "react"
import Image from "next/image"
import D1 from "../assets/images/DOOR1.webp"
import D2 from "../assets/images/DOOR2.webp"
import D3 from "../assets/images/DOOR3.webp"
import D4 from "../assets/images/DOOR4.webp"
import D5 from "../assets/images/DOOR5.webp"
import D6 from "../assets/images/DOOR6.webp"
import D7 from "../assets/images/DOOR7.webp"
import D8 from "../assets/images/DOOR8.webp"
import D9 from "../assets/images/DOOR9.webp"
import D10 from "../assets/images/DOOR10.webp"
import D11 from "../assets/images/DOOR11.webp"
import D12 from "../assets/images/DOOR12.webp"
import D13 from "../assets/images/DOOR13.webp"
import D14 from "../assets/images/DOOR14.webp"

import { motion,useScroll,useTransform} from 'framer-motion';
const SteelDoors = [
  {id:1,src: D1},
  {id:2,src: D2},
  {id:3,src: D3},
  {id:4,src: D4},
  {id:5,src: D5},
  {id:6,src: D6},
  {id:7,src: D7},
  {id:8,src: D8},
  {id:9,src: D9},
  // {id:10,src: D10},
  // {id:11,src: D11},
  // {id:12,src: D12},
  // {id:13,src: D13},
  {id:14,src: D14},
]
const SteelDoor = () => { 
  const { scrollX } = useScroll();
  const x = useTransform(scrollX, (x) => x * 0.3);

    const [zoomedImage, setZoomedImage] = useState(false);

    const handleImageClick = (imageSrc) => {
      setZoomedImage(imageSrc);
    };
    
  
  return (
 
    <div className='flex flex-col gap-5'>
      {/* <motion.h2 className='text-2xl font-bold text-primary uppercase tracking-wide text-center mb-6' initial={{ x:60, opacity: 0 }}
      whileInView={{ x:0, opacity: 1 }}
      transition={{ duration:1, ease: 'easeIn', delay:.2 }}>Steel Doors<span className='text-red-700 font-extrabold ml-3 '>&#x2192;</span></motion.h2> */}
      <div className='flex flex-wrap gap-5 items-center justify-center'   >
  {
    SteelDoors.map((steelDoor)=>(
      <motion.div className='w-80 h-52 cursor-pointer bg-gray-100 ' key={steelDoor.id} onClick={()=>handleImageClick(steelDoor.src)} 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}>
        <Image src={steelDoor.src} alt="Steel Doors" className='w-full h-full object-contain rounded-lg shadow-md' />
      </motion.div>
    ))
  }
  </div>
  {zoomedImage && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex items-center justify-center'
        >
          <Image
            src={zoomedImage}
            alt='Zoomed Image'
            className='max-w-4xl max-h-4xl object-contain rounded-lg shadow-md'
          />
          <button
            className='absolute top-5 right-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setZoomedImage(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>

  )
}

export default SteelDoor