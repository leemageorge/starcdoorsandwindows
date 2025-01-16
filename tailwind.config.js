import { url } from 'inspector';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gotham: "gotham"
      },
       container:{
         padding:"1rem",
        center: true
       },
       colors:{
        primary:"#0b7ab9",
        secondary: "#eff1ed",
        accent:"#727277",
        form:'#49656b',
        cardBg:'#3d5a80'
       },
       backgroundImage:{
        "parallax": "url('../assets/images/parallaxbanner.webp')",
        'contact':"url('../assets/images/contactbanner.png')",
        "reviewBanner":"url('../assets/images/reviewBanner.webp')",
        'banner': "url('../assets/images/posterBannerwhite.jpg')",
        "steelDoorFeature":'url("../assets/images/steeldoorFeature.webp")'
       },
       keyframes: {
        'slide-logos': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'typing': {
          '0%': { transform: 'translateY(0)'},
          '50%': { transform: 'translateY(-10px)'},
          '100%': { transform: 'translateY(0)' },
        },
         'fade-in-up':{
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
         },
         'fade-in-left':{
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
         },
         'fade-in-right':{
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
         },
         'fade-in-down':{
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
         },
         'spin-round':{
          '0%':  {transform: 'rotate(90deg)'},
          '100%': {transform: 'rotate(180deg)'}
         },
      },
      animation: {
        'slide-logos': 'slide-logos 20s linear infinite',
        'typing': 'typing 5s ease infinite',
        'fade-in-up': 'fade-in-up 1s ease-in',
         'fade-in-left': 'fade-in-left 1s ease-in',
         'fade-in-right':'fade-in-right 1s ease-in',
         'fade-in-down':'fade-in-down 1s ease-in',
          'spin-round': 'spin-round 5s linear infinite'
      },
   
  }
  },
  plugins: [],
};
