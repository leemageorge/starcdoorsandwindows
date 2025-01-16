
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import FibreDoors from '../../components/FibreDoors'


const FRPDoors= () => {
  return(
    <div className='overflow-hidden'>
      <div className='h-40 w-full mt-12 relative'>
         <Image src={smallBanner}
                className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
      <h2 className='w-full text-2xl md:text-2xl lg:text-4xl text-white font-medium  uppercase text-center px-5 animate-fade-in-down'>
        Make Your Room Stylish</h2>
  </div>
  </div>
  <div className="py-10  container px-5">
        <h1 className='text-center text-xl lg:text-3xl text-red-700 uppercase  mb-2 animate-fade-in-right'>
          The Beauty and Benefits of Fibre Doors<span className='text-primary font-extrabold ml-3 '>&#x2192;</span></h1>
      
           <div className=' py-3 px-2'>
           <p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10 animate-fade-in-down'>
           Fibre doors are stylish and suitable for bedrooms and bathrooms.
            It is made up of reinforced plastic fibers combined with resins 
            and it is also known as FRP doors or fibreglass doors. If you wish to
            upgrade or stylish your bathroom and bedrooms, it is an excellent choice 
            because of its durability, aesthetic look, and low maintenance.
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