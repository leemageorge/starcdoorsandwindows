"use client"
import Image from "next/image";
import KinzaLogo from '../assets/images/kinzalogo.webp'
import PetraLogo from '../assets/images/petralogo.webp'
import StarkLogo from '../assets/images/starklogo.webp'
import StalyLogo from '../assets/images/stalylogo.webp'
import HawaiLogo from '../assets/images/hawailogo.webp'
import WellcraftLogo from '../assets/images/wellcraftlogo.webp'
import { motion } from "framer-motion";

const LogoImages = [
  {
    id: 1,
    src: KinzaLogo,
    alt: 'Kinza'
  },
  {
    id: 2,
    src: PetraLogo,
    alt: 'Petra'
  },
  {
    id: 3,
    src: StarkLogo,
    alt: 'Stark'
  },
  {
    id: 4,
    src: HawaiLogo,
    alt: 'Hawai'
  },
  {
    id: 5,
    src: StalyLogo,
    alt: 'staly'
  },
  {
    id: 6,
    src: WellcraftLogo,
    alt: 'WellcraftLogo'
  },
]

const LogoTracker = () => {
  return (
    <div className="mx-auto p-4 mt-12 overflow-hidden">
      <motion.h2 className="text-center text-red-700 text-xl lg:text-3xl mb-4 uppercase"
       initial={{x:100, opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration:1, ease: 'easeIn' }}>
        <span className="text-primary mr-3 text-4xl " 
        >&#x2190;</span>
        We Are Channel Partners for
      </motion.h2>
      <div className="overflow-hidden relative">
        <div className="flex flex-none gap-6 items-center justify-center animate-slide-logos">
          {LogoImages.map((logoImage) => (
            <div key={logoImage.id} className="flex flex-none w-36">
              <Image
              loading="lazy"
                src={logoImage.src}
                alt={logoImage.alt}
                className="w-full object-contain flex-none"
                aria-label={logoImage.alt}
                role="img"
              />
            </div>
          ))}
           {LogoImages.map((logoImage) => (
            <div key={logoImage.id} className="flex flex-none w-36 ">
              <Image
              loading="lazy"
                src={logoImage.src}
                alt={logoImage.alt}
                className="w-full object-contain flex-none"
                aria-label={logoImage.alt}
                role="img"
              />
            </div>
          ))}
         {LogoImages.map((logoImage) => (
            <div key={logoImage.id} className="flex flex-none w-36 ">
              <Image
              loading="lazy"
                src={logoImage.src}
                alt={logoImage.alt}
                className="w-full object-contain flex-none"
                aria-label={logoImage.alt}
                role="img"
              />
            </div>
          ))}
          {LogoImages.map((logoImage) => (
            <div key={logoImage.id} className="flex flex-none w-36 ">
              <Image
              loading="lazy"
                src={logoImage.src}
                alt={logoImage.alt}
                className="w-full object-contain flex-none"
                aria-label={logoImage.alt}
                role="img"
              />
            </div>
          ))}
            {LogoImages.map((logoImage) => (
            <div key={logoImage.id} className="flex flex-none w-36 ">
              <Image
              loading="lazy"
                src={logoImage.src}
                alt={logoImage.alt}
                className="w-full object-contain flex-none"
                aria-label={logoImage.alt}
                role="img"
              />
            </div>
          ))}
            {LogoImages.map((logoImage) => (
            <div key={logoImage.id} className="flex flex-none w-36 ">
              <Image
              loading="lazy"
                src={logoImage.src}
                alt={logoImage.alt}
                className="w-full object-contain flex-none"
                aria-label={logoImage.alt}
                role="img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoTracker;