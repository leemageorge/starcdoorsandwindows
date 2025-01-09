"use client";
import React from "react";
import Image from "next/image";
import BannerWhite from "../assets/images/bannerb.webp";
import PosterBanner from "../assets/images/posterBanner.jpg";
import PosterWhite from "../assets/images/posterWhite.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={PosterWhite}
        alt="Starc Steel Banner"
        className=" w-fullc object-cover h-[50vh] md:h-[70vh] lg:h-[100vh] relative"
      />
      {/* Text Content */}
      <motion.div
        className="absolute top-16 lg:top-28 w-full flex flex-col items-center gap-2 lg:gap-6"
        initial={{ y:100,opacity: 0 }}
        whileInView={{ y:0,opacity: 1 }}
        transition={{ duration:1, ease: 'easeIn',delay:.2 }}
      >
        <h1 className="w-full text-md md:text-2xl lg:text-4xl  font-extrabold uppercase text-center text-transparent bg-gradienttext ">
        Your Gateway to Strength and Style
   
        </h1>
        <Link
          href="tel:+919746097373"
          className="cursor-pointer bg-red-700 text-white rounded-md shadow-xl hover:bg-transparent hover:text-red-500 text-sm  lg:text-md uppercase font-bold border hover:border-2 border-gray-400 px-4 py-2 transition duration-300"
        >
          Connect Me→
        </Link>
      </motion.div>
      <motion.div
        className="absolute top-52 lg:top-96 w-full flex items-center py-1 lg:py-6 "
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeIn', delay:.2}}
      >
        <h2 className='text-md md:text-xl lg:text-2xl text-slate-300 font-extrabold w-full text-center animate-typing'>→With Starc Steel Windows and Doors</h2>
        </motion.div>
    </div>
  );
};

export default Banner;