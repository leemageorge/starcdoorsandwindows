import React from 'react'
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsapp from '../components/FloatingWhatsapp';
import ClickToScroll from '../components/ClickToScroll';
import BottomNav from '../components/Bottomnav';


const gotham = localFont({
  src: './fonts/Gotham-Medium.woff',
  variable: '--font-gotham',

});


export const metadata = {
  title: "Starc Steel Windows and Doors",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(gotham.variable,"antialiased")}
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