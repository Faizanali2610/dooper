import React, { useState } from 'react'
import Navbar from './Navbar'
import arr from '../assets/arrow left.png'
// import BasicDetails from './BasicDetails';
// import Association from './Association';
import { Link } from 'react-router-dom';
import Header from './Header';
import edit from "../assets/edit.png"


const Bankinfo = () => {
  
 

  return (
    <>
    <div className='w-full h-[789px]'>
      <Navbar />
      <div className='bg-[#F4F4F4] h-[789px]'>
      <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
           <Header />
           
        <div className='w-[484px] h-auto bg-white rounded-lg  p-[32px] mt-[26px]'>
      <div className='flex flex-col '>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Bank Name</label>
        <input type="text" placeholder='Central Bank'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Account Number</label>
        <input type="text" placeholder='122223348494'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>IFSC Code</label>
        <input type="text" placeholder='CBIN03545'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Upload bank statement / cancel cheque</label>
        <input type="text" placeholder='Doc.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[380px] mt-[-36px] mx-auto'/>
      
   <Link to="/viewprofile" className='px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm'>Save Details</Link>
       
     
       
      </div>
    </div>
       
    
      
    </main>
    </div>
</div>
  
    </>
    )
}

export default Bankinfo