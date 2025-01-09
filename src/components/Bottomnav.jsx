"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import home from "../assets/icons/home.svg";
import about from "../assets/icons/about.svg";
import products from "../assets/icons/products.svg";
import faq from "../assets/icons/faq.svg";
import contact from "../assets/icons/contact.svg";
import downArrow from "../assets/icons/arrowdropdown.svg";

const links = [
  {
    id: 1,
    icon: home,
    url: "/",
  },
  {
    id: 2,
    icon: about,
    url: "/about",
  },
  {
    id: 3,
    icon: products,
    dropdown: [
      { id: 1, url: "/steeldoors", title:"Steel Doors"},
      { id: 2, url: "/steelwindows", title:"Steel Windows" },
      { id: 3, url: "/frpdoors" , title:"Fibre Doors"},
      { id: 4, url: "/membranedoors", title:"Membrane Doors" },
    ],
  },
  {
    id: 4,
    icon: faq,
    url: "/guidance",
  },
  {
    id: 5,
    icon: contact,
    url: "/contact",
  },
];

const BottomNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickOutside =(event)=>{
    if(!event.target.closest('.dropdown')){
      setDropdownOpen(false)
    }
  }
useEffect(()=>{
document.addEventListener("click",handleClickOutside)
return () =>{
  document.removeEventListener('click',handleClickOutside)
}
},[])
  return (
    <div className="fixed bottom-0 w-full py-4 z-10 bg-white shadow-lg lg:hidden">
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        {links.map((link) =>
          link.dropdown ? (
            <div key={link.id} className="relative dropdown">
              {/* Parent Icon with Dropdown */}
              <button
                onClick={toggleDropdown}
                className="relative flex items-center justify-center"
              >
                <Image
                  src={link.icon}
                  alt="Product Gallery"
                  className="w-6 h-6 object-contain"
                />
                <Image
                  src={downArrow}
                  alt="Dropdown arrow"
                  className={`absolute top-6 w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {/* Dropdown Items */}
              {dropdownOpen && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white  rounded-lg shadow-lg p-1 ">
                  {link.dropdown.map((item) => (
                    <Link
                      href={item.url}
                      key={item.id}
                      className="block py-2 px-4 text-sm text-primary font-semibold  hover:bg-primary hover:text-white rounded"
                      onClick={()=>setDropdownOpen(!dropdownOpen)}
                    >
                      <span>{item.title}</span> 
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={link.url} key={link.id}>
              <div className="flex flex-col items-center">
                <Image
                  src={link.icon}
                  alt="Navigation Icon"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BottomNav;
