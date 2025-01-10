
import Image from "next/image"   
import StarkLogo from "../assets/icons/starklogo.png"
import Link from 'next/link'
import facebook from "../assets/icons/facebook.svg"
import insta from "../assets/icons/instagram.svg"
import location from "../assets/icons/location.svg"
import call from "../assets/icons/call.svg"
import mail from "../assets/icons/mail.svg"
const Footer = () => {
  return (
    <div className=' pb-12 lg:pb-3 pt-12 bg-slate-700 text-secondary mt-12'>
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white/30 '>
     <div>
     <Link href="/">
       <Image src={StarkLogo} 
        alt="logo image"
        width={120}
        height={120}
        />
    </Link>
    <p className="mt-6">We deliver Doors and windows as your home deserves. Please step into the next level with starc steel and windows.</p>
    <div className="flex flex-col mt-4 gap-1">
    <p className="flex gap-2 items-center"><Image src={mail} alt="call" className="w-[20px] h-[20px]"/>uvaiz@starcwindows.com</p>
    <Link href='tel:+919746097373' className="flex gap-2"> <Image src={call} alt="call" className="w-[20px] h-[20px] "/>+91 9746097373</Link>
    <Link href='tel:+919947644484' className="flex gap-2" > <Image src={call} alt="call" className="w-[20px] h-[20px] "/>+91 9947644484</Link>
    </div>
    <div className="flex items-center space-x-4 mt-6">
    <Link href='' ><Image src={facebook} alt="facebook" className="w-[20px] h-[20px]"/></Link>
    <Link href='' ><Image src={insta} alt="insta" className="w-[20px] h-[20px]"/></Link>
    <Link href=''></Link><Image src={location} alt="location" className="w-[20px] h-[20px]"/>
    </div>
    </div>
    <div className="md:mx-auto flex flex-col">
      <h2 className="footer__heading">Easy To Access</h2>
      <Link href='/' className="footer__links">Home</Link >
      <Link href='/about' className="footer__links">About Us</Link >
      <Link href='/steeldoors' className="footer__links">Product</Link >
      <Link href='/guidance' className="footer__links">Guide & Support</Link >
      <Link href='/contact' className="footer__links">Contact</Link >
      <Link href='/guidance' className="footer__links">Price Details</Link >
      <Link href='/guidance' className="footer__links">Privacy Policy</Link >
      <Link href='/guidance' className="footer__links">Terms & Conditions</Link >
      <Link href='/guidance' className="footer__links">FAQ</Link >
    </div>
    <div className="lg:mx-auto">
      <h2 className="footer__heading">Channel Partners</h2>
      <p className="footer__links">Kinza </p>
      <p className="footer__links">Petra </p>
      <p className="footer__links">Stark </p>
      <p className="footer__links">Hawaii </p>
      <p className="footer__links">Staly</p>
    </div>
    <div className="lg:mx-auto">
      <h2 className="footer__heading">Office Address</h2>
     <div className="flex items-center gap-4">
     <Image src={location} alt="location" className="w-[20px] h-[20px]"/>
     <p className="footer__links"> STARC,10/2080,Karuvelipady, Kochi-5</p>
     </div>
     <div className="flex items-center gap-4 mt-4">
     <Image src={call} alt="call" className="w-[20px] h-[20px]"/>
     <p className="footer__links">+91 9746097373</p>
     </div>
     <div className="flex items-center gap-4 mt-4">
     <Image src={call} alt="call" className="w-[20px] h-[20px] "/>
     <p className="footer__links">+91 9947644484</p>
     </div>
     <div className="flex items-center gap-4 mt-4">
     <Image src={mail} alt="call" className="w-[20px] h-[20px]"/>
     <p className="footer__links">uvaiz@starcwindows.com</p>
     </div>
    </div>
    </div>
    <p className="text-sm mb-6 md:mb-0 mt-2 text-center p-2">@copyright 2024 by Star Steel Windows and Doors</p>
    </div>
  )
}

export default Footer