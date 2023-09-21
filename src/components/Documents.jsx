import React, { useState } from 'react'
import Navbar from './Navbar'
import arr from '../assets/arrow left.png'
// import BasicDetails from './BasicDetails';
// import Association from './Association';
import { Link } from 'react-router-dom';
import Header from './Header';
import edit from "../assets/edit.png"


const Documents = () => {
  
 

  return (
    <>
    <div className='w-full h-auto'>
      <Navbar />
      <div className='bg-[#F4F4F4]'>
      <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
           <Header />
           
        <div className='w-[484px] h-auto bg-white rounded-lg  p-[32px] mt-[26px]'>
      <div className='flex flex-col '>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Aadhar Card</label>
        <input type="text" placeholder='aadhaar.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
       <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[380px] mt-[-36px] mx-auto'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Pan Card</label>
        <input type="text" placeholder='Pan.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[380px] mt-[-36px] mx-auto'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Lab license file</label>
        <input type="text" placeholder='Lab.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[380px] mt-[-36px] mx-auto'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Lab Established License</label>
        <input type="text" placeholder='Lab.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[380px] mt-[-36px] mx-auto'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>GST</label>
        <input type="text" placeholder='GST.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[380px] mt-[-36px] mx-auto'/>
   <Link to="/bankinfo" className='px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-sm'>Save Details</Link>
       
     
       
      </div>
    </div>
       
    
      
    </main>
    </div>
</div>
  
    </>
    )
}

export default Documents