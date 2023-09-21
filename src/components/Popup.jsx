import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'

const Popup = () => {
  return (
    <>
    <div className='absolute mt-[287px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
    <div className='w-[475px] h-[259px] mb-5 py-[60px] px-[24px] rounded-[8px] bg-white'>
        <h1 className='text-black text-center font-Montserrat font-medium text-base leading-5'>
        Your <span className='text-[#E40443] font-[600] '>Availability</span> is disabled. Please enable <br /> your Availability to get new bookings
        </h1>
        <Link to={"/dashboardcard"} className='flex items-center w-[279px] h-[46px]   text-center justify-center mx-auto rounded-lg text-white  bg-[#E40443] mt-[64px] font-semibold font-Montserrat text-[16px]'>Enable Availaibility</Link>
    </div>
    </div>
  </>
  )
}

export default Popup
