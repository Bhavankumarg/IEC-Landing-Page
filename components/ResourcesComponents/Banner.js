import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="h-screen bg-[url('/resource/banner.png')] bg-cover m-0 p-0">
    <div className="flex flex-col items-center justify-between text-white h-full m-0 p-0">
      <Image
        src="/logo.svg"
        width={500}
        height={200}
        alt="iec logo"
        className="flex justify-center items-center m-auto"
      />
    </div>
  </div>
  )
}

export default Banner