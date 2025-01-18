"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import AvatarImg from '../assets/images/avatarImg.gif'
import  Star  from "../assets/icons/star.svg"
import HalfStar from '../assets/icons/halfstar.svg'
import ArrowBack from "../assets/icons/arrowback.svg"
import ArrowForward from "../assets/icons/arrowforward.svg"


const reviews = [
    {
        id:1,
        src:AvatarImg,
        name:'Meenu Ratheesh',
        comment: "As a House wife who recently innovated our home, I am thrilled with the choice of Starc Steel Doors and Windows. From my perspective Starc Products have not only transformed the look but also the functionality of Our Home in ways that I could not have anticipated. They are built to last, and I have noticed that they handle all kinds of weather beautifully- no rust no wear and tear. The design options from Starc are both elegant and modern. I chose a sleek style that perfectly matches our Home's aesthetics and the compliments from friends and family have been overwhelming.",
        rating:5,
    
  },
   
    {
        id:2,
        src:AvatarImg,
        name:'Jesvin John',
        comment: "Uvaiz Ikka, has carved a notable niche in the market for high-quality steel windows and doors. As a company dedicated to merging aesthetics with functionality, STARC excels in providing durable and stylish solutions for both modern and traditional architecture.Design is another area where STARC shines. Uvaiz Ikka's vision is reflected in the sleek and contemporary designs of their windows and doors. With a variety of styles and finishes available,Installation of STARC products is another highlight. The company provides expert installation services, which adds to the peace of mind for customers. They ensure that each product is fitted perfectly, maintaining the structural integrity and beauty that STARC promises.In conclusion, STARC is a company that lives up to its reputation for quality and design under the leadership of Uvaiz Ikka. With their commitment to excellence, STARC steel windows and doors are an excellent choice for anyone seeking reliable, stylish, and secure solutions. Highly recommended for both residential and commercial projects!",
        rating: 5,
    
    },
    {
        id:3,
        src:AvatarImg,
        name:'Preetha Tony',
        comment: " Excellent quality, better looking and everlasting, and the customer dealing was very good,and am very happy to buy products from STARC steel windows and doors.it was great dealing with you guys, thank you 🤝",
        rating: 4,

    },
    {
        id:4,
        src:AvatarImg,
        name:'Antony Biju',
        comment: "These products are excellent: high quality and reliable performance. Highly recommended!",
        rating: 4,
     
    },
    {
        id:5,
        src:AvatarImg,
        name:'Mareena',
        comment: "Highly reliable, Saying about the customer dealing.. Its simply awesome👌 Greater heights to reach👍",
        rating: 5,
 
    },
]

const ReviewSlider = () => {
    const [index, setIndex] = useState(0);
  
    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
      };
      
      const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
      };
    return (
      <div className="flex flex-col items-center ">
        <div className="flex scroll-smooth  container">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`${i === index ? 'block' : 'hidden'} w-3/4 mx-auto  rounded-lg shadow-lg p-4 text-slate-100 bg-black bg-opacity-30 flex flex-col gap-3 items-center `}
            >
              <Image
                src={review.src}
                className="w-20 h-20 rounded-full"
                width={80}
                height={80}
                unoptimized
                alt={`${review.name}'s Avatar`}
              />
              <h2 className='text-center text-2xl'>{review.name}</h2>
              <p className="line-clamp-2 text-slate-400 ">{review.comment}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, ratingIndex) => (
                  <Image
                  key={ratingIndex}
                    src={ratingIndex < review.rating ? Star : HalfStar}
                    alt={ratingIndex < review.rating ? 'Star' : 'Half Star'}
                    width={20}
                    height={20}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 w-1/2 px-4 ">
          <button onClick={prevSlide}><Image src={ArrowBack} alt='prev'/></button>
          <button onClick={nextSlide}><Image src={ArrowForward} alt='next'/></button>
        </div>
      </div>
    );
  };
  
  export default ReviewSlider;