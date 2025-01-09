"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import StarkLogo from "../assets/icons/starklogo.png";
import facebook from "../assets/icons/facebook.svg";
import insta from "../assets/icons/instagram.svg";
import location from "../assets/icons/location.svg";
import Arrow from "../assets/icons/arrowdropdown.svg"

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Product Gallery", url: "/gallery" },
  { id: 4, title: "Guidance & Support", url: "/guidance" },
  { id: 5, title: "Contact", url: "/contact" },
];

const productDropdown = [
  { id: 1, title: "Steel Doors", url: "/steeldoors" },
  { id: 2, title: "Steel Windows", url: "/steelwindows" },
  { id: 3, title: "Fibre/Bathroom/Bedroom Doors", url: "/frpdoors" },
  { id: 4, title: "Membrane Doors/Bedroom Doors", url: "/membranedoors" },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown')) {
      setDropdownOpen(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
      <div className="container py-2 flex justify-between items-center w-full ">
        <Link href="/">
          <Image src={StarkLogo} alt="logo image" className="w-20 md:w-28"  />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8 text-primary relative z-50">
          {links.map((link) => (
            <div key={link.id} className="" >
              {link.title === "Product Gallery" ? (
                <div className="relative flex items-center cursor-pointer dropdown">
                  <span className="font-bold nav__links flex items-center " onClick={() => setDropdownOpen(!dropdownOpen)} >{link.title}
                    <Image src={Arrow} onClick={() => setDropdownOpen(!dropdownOpen)} alt="Arrow"/>
                  </span>
                  {dropdownOpen && (
                    <div className="absolute bg-primary text-white top-9  rounded-lg shadow-lg py-3 px-5 flex flex-col ">
                      {productDropdown.map((product) => (
                      <div className=" py-2 px-3 hover:bg-white hover:text-primary rounded-md " key={product.id}>

                          <Link
                           href={product.url}
                          className="" onClick={()=>setDropdownOpen(!dropdownOpen)}
                        >
                          {product.title}
                        </Link>
                      </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative" >
                  <Link
                  href={link.url}
                  className="font-bold nav__links"
                >
                 {link.title}
                </Link>
                </div>
            
              )}
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-between items-center gap-3">
          <Link
            href="https://www.facebook.com/starcwindow"
            target="_blank"
            className="bg-primary w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:shadow-lg"
          >
            <Image
              src={facebook}
              alt="facebook"
              className=" w-3 h-3 md:w-5 md:h-5 object-cover"
            />
          </Link>
          <Link
            href="https://www.instagram.com/starcwindow"
            target="_blank"
            className="bg-primary w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:shadow-lg"
          >
            <Image
              src={insta}
              alt="instagram"
              className="w-3 h-3 md:w-5 md:h-5 object-cover"
            />
          </Link>
          <Link
            href="https://maps.app.goo.gl/JfjzrxJQ1BXsizn49"
            target="_blank"
            className="bg-primary w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-green-700 hover:shadow-lg"
          >
            <Image
              src={location}
              alt="location"
              className="w-3 h-3 md:w-5 md:h-5 object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;