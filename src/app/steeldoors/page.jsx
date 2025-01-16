
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import SteelDoor from '../../components/SteelDoors'
import SteelDoorFeature from '../../components/SteelDoorFeature'

const SteelDoors = () => {

  return(
    <div className='overflow-hidden' >
      <div className='h-40 w-full mt-12 relative'>
         <Image src={smallBanner}
            className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5 '>
      <h2 className='w-full text-xl md:text-2xl lg:text-4xl text-white font-medium  uppercase text-center animate-fade-in-down' >
              Discover the power of steel in every step</h2>
  </div>
  </div>
  <div className=" container py-10 px-5">
        <h1 className='text-center text-xl lg:text-3xl text-red-700 uppercase  mb-4 animate-fade-in-right'>Why choose Steel Doors ?<span className='text-primary font-extrabold ml-3 '>&#x2192;</span></h1>
      
           <div className=' py-3 px-2 '>
           <p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10 animate-fade-in-left'
            initial={{ x:60, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{ duration:1, ease: 'easeIn', delay:.2 }}>
              At Starc, We supply premium quality steel doors and windows across Kerala.
               Do you know, Why steel doors stand out in the market? There are multiple reasons. 
               Their composition and manufacturing processes are different, resulting in a combination of 
               strength, durability, and energy efficiency. Compared to other doors, steel doors are a
                better option due to their low maintenance, durability, and design. Their protection against
                 pests and weather conditions makes them number one in the market trends. Steel door is much stronger
                  than wood or fibreglass, making it more difficult to break. The most important key feature is
                   their strong frames and their look and design and also their specialized locking mechanisms.
                    It gives us what the industry demands or what we need
            </p>
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