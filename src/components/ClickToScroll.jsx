"use client"
import { useState, useEffect } from 'react';
import React from 'react'
import Image from 'next/image'
import ClickToscrollUp from "../assets/icons/clicktoscrollup.svg"

const ClickToScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
      return (
        <div className='fixed bottom-24 lg:bottom-12 right-0 mb-4 mr-4 z-10 rounded-full flex items-center justify-center cursor-pointer text-white bg-gradient-to-r from-slate-400 to-gray-700 '>
            {
              isVisible && (    <Image src={ClickToscrollUp} alt='arrow up' onClick={scrollToTop} width={46} height={46}/>)
            }
        
        </div>
      );
    };


export default ClickToScroll