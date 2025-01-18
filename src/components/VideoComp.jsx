import React from 'react'
import Image from 'next/image'
import VideoBanner from "../assets/images/videobanner.webp"

const VideoComp = () => {
  return (
<div className='container rounded-md ' >
  <div className='flex flex-wrap  gap-5 p-4 w-full justify-center mx-auto'>
  <div className='w-[380px] h-[400px] '>
      <Image src={VideoBanner} alt='poster-small' className=' w-full h-full object-fill rounded-md'/>
  </div>
  <div className='w-[380px] h-[400px] '>
        <video className='w-full h-full object-cover rounded-md' controls preload="play">
        <source src="/v1.mp4" type="video/mp4"/> 
        </video>
        </div>
        <div className='w-[380px] h-[400px] '>
        <video className='w-full h-full object-cover rounded-md' controls preload="play">
        <source src="/v2.mp4" type="video/mp4" />
        </video>
      </div>
  
     
  </div>
</div>
  )
}

export default VideoComp