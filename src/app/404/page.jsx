import React from 'react'

const Page = () => {
  return (
    <div className='container mt-8 relative overflow-hidden'>
      <h1 className='text-[150px] lg:text-[300px] text-center bg-gradienttext font-extrabold animate-typing '>404</h1>
      <h2 className="text-center text-[50px] bg-gradienttext mt-2  animate-pulse">
        Oops !!!!!  Page Not Found
      </h2>
      <p className="text-center mt-6 mb-6">
        <a href="/" className=" bg-red-800 text-white px-4 py-2 rounded-lg" >
          GoBack to Homepage
        </a>
      </p>
    </div>
  )
}

export default Page