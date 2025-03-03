import React from 'react'
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsapp from '../components/FloatingWhatsapp';
import ClickToScroll from '../components/ClickToScroll';
import BottomNav from '../components/Bottomnav';
import Script from 'next/script';

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
    default:"Top Steel Doors and Windows in Ernakulam, Kerala | Affordable Prices",
    template: "%s - Starc Steel Windows and Doors"
  },
  description: " We specializes in supplying high-quality steel windows and doors throughout Kerala and other states",
  keywords:["steel doors and windows in ernakulam,kerala","steel doors and windows dealers in kerala" ,"steel doors and windows prices in kerala","bathroom doors in ernakulam, kerala","Fibre Doors in ernakulam,kerala","Membrane Doors in ernakulam,kerala" ],
  author: "Starc Steel Windows and Doors",
  openGraph :{
      title:"Starc Steel Windows and Doors",
      description:"We specialize in supplying high-quality steel windows and doors throughout Kerala and other states",
      images:["https://starcsteelwindow.com/public/opengraphimage.png"],
      url:"https://www.starcsteelwindow.com",
      type: "website",
      site_name: "Starc Steel Windows and Doors"
  },
  canonical: "https://starcsteelwindow.com/"
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
     <meta name="google-site-verification" content="ld9QOsqcHLvzzULIqeemSxrqdBsTnsz_uN6GhqgFwCg" />
     <Script async src="https://www.googletagmanager.com/gtag/js?id=G-66LK3GM1KT"></Script>
    <Script id="google-analytics">
          {
             `window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-66LK3GM1KT');`
          }
      </Script>
     </head>
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
