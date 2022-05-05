import React from 'react'
import {FcBbc} from 'react-icons/fc'
const Featured = () => {
  return (
    <div className="mt-[50px]">
      <h1 className="text-center text-[28px] opacity-80">Featured in</h1>
      <div className="flex items-center justify-center">
        <div className="w-[90%] gap-x-10 self-center flex-wrap flex items-center justify-center">
          <FcBbc size={150} />
          <FcBbc size={150} />
          <FcBbc size={150} />
          <FcBbc size={150} />
          <FcBbc size={150} />
          <FcBbc size={150} />
          <FcBbc size={150} />
          <FcBbc size={150} />
          <FcBbc size={150} />
          
        </div>
      </div>
    </div>
  )
}

export default Featured