import React, { useRef, useState } from 'react'
import done from "../assets/Done.png" 
import { Link } from 'react-router-dom'
const SuccessCard = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-[1215px] flex items-center justify-center bg-[black] bg-opacity-[40%] z-30'>
    <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30 '>
    <div className='w-[600px] h-auto p-[32px] bg-white rounded-2xl ml-[420px] relative z-30' >
    <img src={done} alt="done" className='block mx-auto h-[120px] w-[120px] '/> 
    <h1 className='flex items-center justify-center mt-[40px] font-Montserrat text-[20px] font-[700] '>Successful</h1>
    <h2 className='flex items-center justify-center mt-[7px] font-Montserrat text-[14px] font-[500] '>OPT Is verified successfully</h2>
    
    <Link to="/samplecollected" className='mt-[40px] flex items-center cursor-pointer justify-center font-Montserrat text-[14px] font-[500] text-[#8D98A4]'>Later</Link>

    </div>
    </div>
    </div>
  )
}

export default SuccessCard
