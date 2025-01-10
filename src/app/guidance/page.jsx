"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import { motion } from 'framer-motion'

const faqs = [
  {
    QueNo: 1,
    question: "Why steel windows and steel doors?",
    answer: (
      <div className=''>
        1.It reduces cost.<br />
        2.It lasts for long term without maintenance once it gets installed.<br />
        3.Prevent from termite attacks, we guarantee a termite-free home.<br />
        4.It doesn’t shrink or swell during weather changing, it helps you to find a complete solution for weather changing worries.<br />
        5.It doesn’t damage the environment.<br />
        6.No trees were trimmed during manufacturing steel windows and doors.
      </div>
    )
  },
  {
    QueNo:2,
    question:"What will be a steel door and windows weight?",
    answer: "A steel door weight will be 35-225 kgs. It depends on the sizes and materials which used to manufacture like frames and lock set. Multiple locking set is the specialily in steel doors. Steel window weight start from 15kgs depending on the size which we intended to manufacture "
  },
  {
    QueNo:3,
    question:"What is the Warranty for Steel Doors?",
    answer: "It includes a 2 year replacement warranty against manufacturing defects and 5 year replacement warranty for lock system."
  },
  {
    QueNo:4,
    question:"Which is better for windows and doors, wood  or steel doors",
    answer: "compared to wood doors and windows steel doors and windows are more secure, strong, cost-effective long life low maintenance and energy-efficient"
  },
  {
    QueNo:5,
    question:"Which is better for windows and doors, wood  or steel doors",
    answer: "compared to wood doors and windows steel doors and windows are more secure, strong, cost-effective long life low maintenance and energy-efficient"
  },
  {
    QueNo:6,
    question:"Which is better for windows and doors, wood  or steel doors",
    answer: "compared to wood doors and windows steel doors and windows are more secure, strong, cost-effective long life low maintenance and energy-efficient"
  },   
  {
    QueNo:7,
    question:"Which is better for windows and doors, wood  or steel doors",
    answer: "compared to wood doors and windows steel doors and windows are more secure, strong, cost-effective long life low maintenance and energy-efficient"
  },
  {
    QueNo:8,
    question:"Which is better for windows and doors, wood  or steel doors",
    answer: "compared to wood doors and windows steel doors and windows are more secure, strong, cost-effective long life low maintenance and energy-efficient"
  },
  {
    QueNo:9,
    question:"Which is better for windows and doors, wood  or steel doors",
    answer: "compared to wood doors and windows steel doors and windows are more secure, strong, cost-effective long life low maintenance and energy-efficient"
  },  
  {
    QueNo:10,
    question:"Which is better for windows and doors, wood  or steel doors",
    answer: "compared to wood doors and windows steel doors and windows are more secure, strong, cost-effective long life low maintenance and energy-efficient"
  }
]



const Guidance = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="">
      <div className="h-40 w-full mt-12 relative">
        <Image
          src={smallBanner}
          className="absolute top-0 left-0 w-full h-full rounded-md object-fill"
          alt="Banner Image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <motion.h1 className="w-full text-2xl md:text-4xl text-white font-bold text-center uppercase px-5" 
           initial={{ y:-20, opacity:0 }}
           whileInView={{ y:0, opacity:1 }}
           transition={{ duration:1, ease: 'easeIn'}}>
            Frequently Asked Questions (FAQs)
          </motion.h1>
        </div>
      </div>
      <motion.div className='container mt-12 mx-auto'  
           initial={{ x:-40, opacity:0 }}
           whileInView={{ x:0, opacity:1 }}
           transition={{ duration:1, ease: 'easeIn'}}>
      <div className="w-full min-h-screen bg-form rounded-lg py-4 relative">
          <div className="absolute z-0 w-40 h-40 bg-gray-200 rounded-full -right-7 -top-4 opacity-15"></div>
          <div className="absolute z-0 w-40 h-40 bg-gray-200 rounded-full -left-7 -bottom-4 opacity-15"></div>
          <div className="p-4">
          {faqs.map((faq) => (
            <div key={faq.QueNo} className="mb-4">
              <button
                onClick={() => toggleFaq(faq.QueNo)}
                className="flex justify-between items-center w-full text-left p-4 text-white rounded-md shadow-sm "
              >
                <h2 className="font-medium text-lg z-10">{faq.question}</h2>
                <span className="text-xl font-bold z-10">{openFaq === faq.QueNo ? "-" : "+"}</span>
              </button>
              {openFaq === faq.QueNo && (
                <div className="p-4  bg-white text-slate-800 rounded-md shadow-lg">
                  <p className='text-lg mt-2 '>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Guidance;
