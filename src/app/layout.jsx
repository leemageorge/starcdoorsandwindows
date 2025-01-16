import React from 'react'
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsapp from '../components/FloatingWhatsapp';
import ClickToScroll from '../components/ClickToScroll';
import BottomNav from '../components/Bottomnav';


const gothamMedium = localFont({
  src: './fonts/Gotham-Medium.woff',
  variable: '--font-gotham',

});
const gothamLight = localFont({
  src: './fonts/Gotham-Light.woff',
  variable: '--font-gotham',

});

export const metadata = {
  metadataBase: new URL('https://starcsteelwindow.com'),
  title: {
    default:"Starc Steel Windows and Doors",
    template: "%s - Starc Steel Windows and Doors"
  },
  description: " We specializes in supplying high-quality steel windows and doors throughout Kerala and other states.",
  keywords:["steel doors windows in ernakulam,kerala","steel doors windows dealers in kerala" ,"steel doors and windows prices in kerala","bathroom doors in kerala","Fibre Doors in kerala","Membrane Doors in kerala" ],
  author: "Starc Steel Windows and Doors",
  openGraph :{
      title:"Starc Steel Windows and Doors",
      description:"We specializes in supplying high-quality steel windows and doors throughout Kerala and other states",
      images:["public/opengraphmage.png"],
      url:"https://starcsteelwindow.com"
  },
   canonical: "https://starcsteelwindow.com"
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(`${gothamMedium.variable}, ${gothamLight.variable},"antialiased"`)}
      >
        <Navbar />
        {children}
        <BottomNav />
        <Footer />
        <FloatingWhatsapp />
        <ClickToScroll />
      </body>
    </html>
  );
}
