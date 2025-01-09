import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import FibreDoors from '../../components/FibreDoors'


const FRPDoors= () => {
  return(
    <div>
      <div className='h-40 w-full mt-12 relative'>
         <Image src={smallBanner}
                className="absolute top-0 left-0 w-full h-full rounded-md object-cover" alt="banner Image" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
      <h1 className='text-sm md:text-3xl lg:text-5xl text-white font-bold'>Make Your Bathroom Stylish</h1>
  </div>
  </div>
  <div className="py-10 px-5 container">
        <h2 className='text-center text-3xl text-red-700 font-bold mb-4' >The Beauty and Benefits of Fibre Doors for Bathrooms <span className='text-primary font-extrabold ml-3 '>&#x2192;</span></h2>
      
           <div className=' py-3 px-2'>
           <p className='text-justify px-5 py-3 text-gray-500 text-xl leading-10'>
             Fibre doors, also known as fiberglass doors, 
           are made from reinforced plastic fibers combined with resins. 
           Fibre doors are an excellent choice for bathrooms, blending durability, 
           aesthetic appeal, and low maintenance in one package. If you're considering a
            bathroom renovation or simply want to upgrade your door, think about incorporating
             fibre doors into your plans. Their unique advantages may just be the solution 
             you're looking for to enhance both functionality and style in your bathroom.
            </p>
           </div>
       
      </div>
      <div className='container'>
        <FibreDoors />
      </div>
    </div>
      
  )
}

export default FRPDoors