import React from 'react'
import Image from 'next/image'
import call from '../assets/icons/call.svg'
import mail from "../assets/icons/mail.svg"
import location from "../assets/icons/location.svg"
import facebook from "../assets/icons/facebook.svg"
import insta from "../assets/icons/instagram.svg"
import Link from 'next/link'

const ContactForm = () => {
  return (
    <div className='container w-full mx-auto mt-6'>
        <div className='flex items-center justify-center w-full min-h-screen'>
          <div className='bg-form w-full  p-8 shadow-lg text-secondary rounded flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-between overflow-hidden'>
           <div className='flex flex-col space-y-8 justify-between'>
           <div className='w-full lg:w-3/4' >
           <h2 className='text-xl lg:text-3xl text-white uppercase font-bold  tracking-widest text-center '>Connect With Us<span className=' font-extrabold ml-3 '>&#x2192;</span> </h2>
           <p className=' text-md lg:text-lg  text-gray-300 mt-6 text-justify '>
           With our expert teams, transform your space into a more stylish one! 
           If you're looking to makeover your entire home or a single portion, 
           we're here to guide you through every single step. From modern to traditional design, 
           we will help you to create a space in a unique. Why are you waiting for it? Let's get 
           started on this exciting journey with us to make your home become heaven!<br/><br/>
               Drop me a line of message .... Let's Style Your Home</p>
           </div>
           <div className='flex flex-col space-y-6'>
              <div className='inline-flex  space-x-2 items-center'>
                <Image src={call} alt='call svg'/>
                <span className='text-sm'>+91 9746097373</span>
              </div>
              <div className='inline-flex  space-x-2 items-center'>
                <Image src={mail} alt='mail svg' />
                <span className='text-sm'>uvaiz@starcwindows.com</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <Image src={location} alt='location svg' />
                <span className='text-sm'>STARC,10/2080,Karuvelipady, Kochi-5</span>
              </div>
           </div>
           <div className='flex space-x-4 '>
                <Link href="https://www.instagram.com/starcwindow"> <Image src={facebook} alt="facebook" className="w-[24px] h-[24px]"/></Link>   
                <Link href="https://www.facebook.com/starcwindow">   <Image src={insta} alt="insta" className="w-[24px] h-[24px]"/></Link>   
           </div>
           </div>
           <div className='relative'>
            <div className=' absolute z-0 w-40 h-40 bg-gray-200 rounded-full -right-28 -top-28 opacity-65'></div>
            <div className=' absolute z-0 w-40 h-40 bg-gray-200 rounded-full -left-28 -bottom-16 opacity-65'></div>
            <div className='relative z-10 bg-white rounded-md shadow-lg p-8 text-form md:w-80'>
                <form action="" className='flex flex-col space-y-4 '>
                <div>
                    <label htmlFor="" className='text-sm font-semibold'>Your Name</label>
                    <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-600 focus:font-bold'/>
                  </div>
                  <div>
                    <label htmlFor="" className='text-sm font-semibold'>Email Address</label>
                    <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-600 focus:font-bold'/>
                  </div>
                  <div>
                    <label htmlFor="" className='text-sm font-semibold'>Message</label>
                    <textarea  placeholder='Message' rows='4'  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-600 focus:font-bold resize-none'>
                    </textarea>
                  </div>
                  <button className='bg-form text-white font-bold text-sm uppercase p-4 py-2 rounded-md self-center'>Send Message</button>
                </form>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default ContactForm 