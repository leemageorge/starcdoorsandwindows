"use client";
import React from "react";
import Image from "next/image";
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
        className="w-full object-cover h-[50vh] md:h-[70vh] lg:h-[100vh] relative"
      />
      {/* Text Content */}
      <motion.div
        className="absolute top-16 md:top-36 lg:top-40 w-full flex flex-col items-center gap-2 lg:gap-6"
        initial={{ y:100,opacity: 0 }}
        whileInView={{ y:0,opacity: 1 }}
        transition={{ duration:1, ease: 'easeIn',delay:.2 }}
      >
        <h2 className="w-full text-2xl md:text-5xl font-bold uppercase text-center bg-gradienttext ">
        Your Gateway to Strength and Style
   
        </h2>
        {/* <Link
          href="tel:+919746097373"
          className="hidden lg:block cursor-pointer bg-red-700 text-white rounded-md shadow-xl hover:bg-transparent hover:text-red-500 text-md  lg:text-md Capitilize font-medium border hover:border-2 border-gray-400 px-4 py-2 transition duration-300"
        >
          Connect Me  →
        </Link> */}
      </motion.div>
      <motion.div
        className="absolute top-52 md:top-2/3   w-full flex flex-col items-center py-1 lg:py-6 "
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeIn', delay:.2}}
      >
        <h1 className='text-xl md:text-3xl text-slate-100 uppercase font-bold w-full text-center animate-typing'>→ With Starc Steel Windows and Doors</h1>
        </motion.div>
    </div>
  );
};

export default Banner;