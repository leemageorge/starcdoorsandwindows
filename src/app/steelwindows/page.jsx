
import React from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import SteelWindow from '../../components/SteelWindows'


const SteelWindows = () => {
  return (
    <div className='overflow-hidden'>
      <div className='h-40 w-full mt-12 relative'>
        <Image src={smallBanner}
          className="absolute top-0 left-0 w-full h-full rounded-md object-fill" alt="banner Image" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full '>
          <h2 className='text-2xl md:text-3xl lg:text-5xl text-white w-full text-center uppercase px-5 animate-fade-in-up'>
              Best Choice forever</h2>
        </div>
      </div>
      <div className="py-10 px-5">
        <h1 className='text-center text-xl lg:text-3xl text-red-700 uppercase mb-2 animate-fade-in-right'>Why Steel Windows are more popular?<span className='text-primary text-3xl  ml-1 '>&#x2192;</span></h1>

        <div className='py-3 px-2 container'>
          <p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10 animate-fade-in-left'>
           Why are steel windows a popular choice for many homeowners and builders? 
           Steel windows are built to last. Steel gives protection against pests 
           and all-weather conditions like heavy rain, snow, and wind.
            I can say that planning to make a home with steel windows is a long-term investment, 
            with proper maintenance they can be durable for years and years. Modern steel windows 
            can be manufactured with new technology,  resulting in thermal breaks to enhance 
            their insulation capabilities, helping to reduce energy bills. If you are planning to
             build or renovate your home, consider steel windows as a better and functional option.
              Enhanced natural light and a long lifespan make them and better decision for conscientious homeowners. 
              If you decide to replace your windows it can be reused. Steel windows have a wide variety of collections
               along with the current industrial design trends.
          </p>
        </div>
      </div>
      <div className='container'>
        <SteelWindow />
      </div>
    </div>
  )
}

export default SteelWindows