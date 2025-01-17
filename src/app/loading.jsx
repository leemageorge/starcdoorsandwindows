import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center bg-secondary mt-24">
  <div className="flex space-x-2">
    <div className="w-4 h-4 bg-gradienttext rounded-full animate-pulse"></div>
    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-100"></div>
    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-200"></div>
  </div>
</div>
  )
}

export default loading