import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import whatsapp from "../assets/icons/whatsapp.svg"
const FloatingWhatsapp = () => {
  return (
    <div className='fixed bottom-10 lg:bottom-0 right-0 mb-4 mr-4 z-10 '>
    <Link href="https://wa.me/+919746097373" target='_blank'>
    <Image src={whatsapp} alt='whats app svg' width={50} height={50}/>
    </Link>    
    </div>
  )
}

export default FloatingWhatsapp