import React from 'react'

import Banner from '../components/Banner';
import LogoTracker from '../components/LogoTracker';
import Product from '../components/Product';
import Testimonials from '../components/Testimonials';
import VideoComp from '../components/VideoComp';



export default function Home() {
  return (
    <div>
      <Banner />
      <Product />
      <LogoTracker />
      <VideoComp />
      <Testimonials />
    </div>
  );
}
