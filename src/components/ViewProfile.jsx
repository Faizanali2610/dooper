import React, { useState } from 'react'
import Navbar from './Navbar'

import arr from '../assets/arrow left.png'
import { Link } from 'react-router-dom'

import edit from "../assets/edit.png"



const ViewProfile = () => {

  

  return (
    <>
    <div className='w-full '>
      <Navbar />
      <div className='bg-[#F4F4F4] '>
      <main className='  mx-[120px] pt-[24px]   pb-[48px]  '>
        <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>
          <img src={arr} alt="arr" srcset="" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
           View Profile</div>
         {/* Basic datails */}
         <div className='w-[580px] bg-white rounded-lg h-[974px]  p-[32px] mt-[26px]'>
      <div className='flex flex-col '>
        <h1 className='font-Montserrat text-[20px] font-medium text-[#1A1C1F] mb-[22px]'>Basic details</h1>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Full Name</label>
        <input type="text" placeholder='jaydip Sakhiya'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Mobile Number </label>
        <input type="text" placeholder='98873535353'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Lab Photo</label>
        <input type="text" placeholder='Lab.js'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
       <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[480px] mt-[-36px] mx-auto'/>
       <h1 className='font-Montserrat text-[12px] font-medium text-[#1A1C1F] mt-[16px] ml-[4px]'>lab photo.jpg</h1>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Lab Name</label>
        <input type="text" placeholder='JJ Labs'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Lab Address *</label>
        <input type="text" placeholder='123'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <input type="text" placeholder='Some Society,nr.Some School'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[12px]'/>
        <input type="text" placeholder='Surat'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[12px]'/>
        <input type="text" placeholder='Gujarat'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[12px]'/>
      </div>
    </div>
         {/* Documents    */}
                   
        <div className='w-[580px] h-[534px] bg-white rounded-lg  p-[32px] -mt-[975px] ml-[614px]'>
      <div className='flex flex-col '>
      <h1 className='font-Montserrat text-[20px] font-medium text-[#1A1C1F] mb-[22px]'>Documents</h1>

        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Aadhar Card</label>
        <input type="text" placeholder='aadhaar.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
       <h1 className='h-[24px] w-[24px] ml-[460px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Pan Card</label>
        <input type="text" placeholder='Pan.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <h1 className='h-[24px] w-[24px] ml-[460px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
       
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Lab license file</label>
        <input type="text" placeholder='Lab.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <h1 className='h-[24px] w-[24px] ml-[460px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
       
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Lab Established License</label>
        <input type="text" placeholder='Lab.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
       <h1 className='h-[24px] w-[24px] ml-[460px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
        
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>GST</label>
        <input type="text" placeholder='GST.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
       <h1 className='h-[24px] w-[24px] ml-[460px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>
        
            </div>
    </div>
    {/* Bank details  */}
    <div className='w-[580px] h-auto bg-white rounded-lg  p-[32px] -mt-[26px] ml-[614px]'>
      <div className='flex flex-col '>
      <h1 className='font-Montserrat text-[20px] font-medium text-[#1A1C1F] mb-[22px]'>Bank details</h1>
      <div className='flex flex-col w-[420px]'>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Bank Name</label>
        <input type="text" placeholder='Central Bank'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Account Number</label>
        <input type="text" placeholder='122223348494'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>IFSC Code</label>
        <input type="text" placeholder='CBIN03545'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]   mt-[24px] ml-1'>Upload bank statement / cancel cheque</label>
        <input type="text" placeholder='Doc.jpg'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
       <h1 className='h-[24px] w-[24px] ml-[362px] mt-[-34px] mx-auto font-Montserrat text-[14px] font-medium underline text-[#E40443]'>View</h1>

      
       
     
       
      </div>
      </div>
    </div>
      </main>
      </div>
      

    </div>


    </>
    )
}

export default ViewProfile
