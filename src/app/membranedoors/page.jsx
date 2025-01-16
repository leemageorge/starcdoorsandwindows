
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import MembraneDoors from '../../components/MembraneDoors'

const MembraneDoorsPage = () => {
  return (
    <div >
      <div className='h-40 w-full mt-12 relative'>
        <Image src={smallBanner}
          className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
          <h2 className='w-full text-xl md:text-2xl lg:text-4xl text-white font-medium  uppercase text-center px-5 animate-fade-in-up'>
            Stylish Your Home its our concern</h2>
        </div>
      </div>
      <div className="py-10 px-5">
        <h1 className='text-center text-lg lg:text-3xl text-red-700 uppercase  mb-4 animate-fade-in-up' >
          Why choose Membrane Doors ?<span className='text-primary font-extrabold ml-3 '>&#x2192;</span></h1>

        <div className='py-3 px-2 container'>
          <p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10 animate-fade-in-down'>
            In modern homes for a neat stylish and smooth finish membrane 
            doors are the best choice. The most important factors in selecting 
            membrane doors are their soundproofing, enhanced durability, low maintenance and low costs.
             They are very budget-friendly and their stylish look beautifies our homes like Luxurious.
          </p>
        </div>

      </div>
      <div className='container'>
        <MembraneDoors />
      </div>
    </div>

  )
}

export default MembraneDoorsPage