import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import MembraneDoors from '../../components/MembraneDoors'


const MembraneDoorsPage = () => {
  return (
    <div >
      <div className='h-40 w-full mt-12 relative'>
        <Image src={smallBanner}
          className="absolute top-0 left-0 w-full h-full rounded-md object-cover" alt="banner Image" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <h1 className='text-sm md:text-3xl lg:text-4xl text-white font-bold'>Stylish Your Home its our concern</h1>
        </div>
      </div>
      <div className="py-10 px-5">
        <h2 className='text-center text-3xl text-red-700 font-bold mb-4' >Why choose Membrane Doors ?<span className='text-primary font-extrabold ml-3 '>&#x2192;</span></h2>

        <div className='py-3 px-2 container'>
          <p className='text-justify px-5 py-3 text-gray-500 text-xl leading-10'>
            In modern types of residential houses for a neat and smooth finishing membrane doors are best choice.
            Why Membrane Doors are choose Minimizing energy loss
            Reduction of all forms of sound pollution
            Enhancing the level of durability
            Reduction of the maintenance costs
            Providing a variety of appealing designs.
            They are however not ideal for some other applications such as those that require high levels of safety and sound proofing.
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