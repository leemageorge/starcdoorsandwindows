"use client"
import Image from 'next/image'

import Avatar from '../assets/images/avatar.gif'
import  Star  from "../assets/icons/star.svg"
import HalfStar from '../assets/icons/halfstar.svg'
import { motion } from 'framer-motion'
const reviews = [
    {
        id:1,
        src:Avatar,
        name:'Meenu Ratheesh',
        comment: "As a House wife who recently innovated our home, I am thrilled with the choice of Starc Steel Doors and Windows. From my perspective Starc Products have not only transformed the look but also the functionality of Our Home in ways that I could not have anticipated. They are built to last, and I have noticed that they handle all kinds of weather beautifully- no rust no wear and tear. The design options from Starc are both elegant and modern. I chose a sleek style that perfectly matches our Home's aesthetics and the compliments from friends and family have been overwhelming.",
        rating:5,
        color: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
   
    {
        id:2,
        src:Avatar,
        name:'Jesvin John',
        comment: "Uvaiz Ikka, has carved a notable niche in the market for high-quality steel windows and doors. As a company dedicated to merging aesthetics with functionality, STARC excels in providing durable and stylish solutions for both modern and traditional architecture.Design is another area where STARC shines. Uvaiz Ikka's vision is reflected in the sleek and contemporary designs of their windows and doors. With a variety of styles and finishes available,Installation of STARC products is another highlight. The company provides expert installation services, which adds to the peace of mind for customers. They ensure that each product is fitted perfectly, maintaining the structural integrity and beauty that STARC promises.In conclusion, STARC is a company that lives up to its reputation for quality and design under the leadership of Uvaiz Ikka. With their commitment to excellence, STARC steel windows and doors are an excellent choice for anyone seeking reliable, stylish, and secure solutions. Highly recommended for both residential and commercial projects!",
        rating: 5,
        color: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
        id:3,
        src:Avatar,
        name:'Preetha Tony',
        comment: " Excellent quality, better looking and everlasting, and the customer dealing was very good,and am very happy to buy products from STARC steel windows and doors.it was great dealing with you guys, thank you 🤝",
        rating: 4,
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
        id:4,
        src:Avatar,
        name:'Antony Biju',
        comment: "These products are excellent: high quality and reliable performance. Highly recommended!",
        rating: 4,
        color: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
        id:5,
        src:Avatar,
        name:'Mareena',
        comment: "Highly reliable, Saying about the customer dealing.. Its simply awesome👌 Greater heights to reach👍",
        rating: 5,
        color: "bg-gradient-to-r from-teal-400 to-teal-600",
    },
]

const TestimonialSlider = () => {
  return (
    <div className="overflow-hidden">
    <motion.div className='flex gap-6 ' transition={{duration:20, ease:"linear", repeatType:"loop", repeat:Infinity,repeatDelay: 0}} initial={{translateX: 0}} animate={{translateX :"-100%"}}>

        {
           [...reviews, ...reviews].map((review, index)=>(
               <div  key={`${review.id}-${index}`} className={`${review.color} w-96 rounded-lg shadow-lg p-4 text-white flex flex-col gap-3 items-center`} >
                    <Image src={review.src}   className="w-20 h-20 rounded-full"
              width={80}
              height={80} alt={`${review.name}'s Avatar`} />
                    <h2>{review.name}</h2>
                    <p className='line-clamp-3'>{review.comment}</p>
                    <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src={index < review.rating ? Star : HalfStar}
                alt={index < review.rating ? "Star" : "Half Star"}
                width={20}
                height={20}
              />
            ))}
          </div>
               </div> 
            ))
        }
      
    </motion.div>
    </div> 
  )
}

export default TestimonialSlider
