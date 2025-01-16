

import Image from 'next/image'
import smallBanner from "../../assets/images/smallbanner.png"
import Feature from '../../components/Feature'




const About = () => {
  return (

    <div className='overflow-hidden'>
      <div className='h-40 w-full mt-12 relative'>
        <Image src={smallBanner}
          className="absolute object-fill top-0 left-0 w-full h-full rounded-md" alt="banner Image" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full '>
          <h1 className='text-2xl md:text-3xl lg:text-4xl animate-fade-in-up text-white text-center font-medium uppercase px-5'
         >We Make Your Home Safe</h1>
        </div>
      </div>
      <div className="container py-10 px-5">
        <h2 className='text-center text-xl lg:text-3xl text-red-700  uppercase  mb-2 animate-fade-in-down' >What We Do<span className='text-primary font-extrabold ml-3 '>&#x2192;</span></h2>
      
           <div className='py-3 px-2 '>
           <p className='text-justify px-5 py-3 text-gray-500 text-md lg:text-lg lg:leading-10 animate-fade-in-left' initial={{ x:-60,opacity: 0 }}
             >
              Starc Steel Windows and Doors specializes in supplying high-quality 
              steel windows and doors throughout Kerala and other states. 
              Our premium steel products enhance the beauty of your home while
               providing strength and security. We offer customizable options to
                meet specific architectural needs, ensuring lifelong durability
                 and structural integrity. We focus on safety and elegance in both 
                 residential and commercial spaces. We are proud to collaborate with
                  partners like Kinza Steel Doors, Staly, Petra, Stark, and Hawaii.
                   These partnerships strengthen our ability to deliver superior products
                    and better serve our clients. You connect with trusted brands by partnering
                     with Starc Steel Windows and Doors. We, the enthusiastic team will guide your entire project.
                      Together, we can turn your dreams into a beautiful reality.
            </p>
           </div>
       
      </div>
      <div className='mt-4'>
        <Feature />
      </div>
    </div>
  )
}

export default About