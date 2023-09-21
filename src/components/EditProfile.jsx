import React, { useState } from 'react'
import Navbar from './Navbar'
import arr from '../assets/arrow left.png'


import { Link } from 'react-router-dom';
import edit from "../assets/edit.png"
import Header from './Header';





const EditProfile = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleItem = (item) => {
      setSelectedItem((prevSelectedItem) =>
        prevSelectedItem === item ? '' : item
      );
    };
  

  return (
    <>
      <div className='w-full '>
      <Navbar />
      <div className='bg-[#F4F4F4] '>
      <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
           <Header />
        <div className='w-[484px] bg-white rounded-lg h-auto p-[32px] mt-[26px]'>
      <div className='flex flex-col '>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4] ml-1'>Full Name</label>
        <input type="text" placeholder='jaydip Sakhiya'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Mobile Number </label>
        <input type="text" placeholder='98873535353'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Lab Photo</label>
        <input type="text" placeholder='Lab.png'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
       <img src={edit} alt="" srcset="" className='h-[24px] w-[24px] ml-[380px] mt-[-36px] mx-auto'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Lab Name</label>
        <input type="text" placeholder='JJ Labs'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <label className='font-Montserrat text-[12px] font-medium text-[#8D98A4]  ml-1 mt-[24px]'>Lab Address *</label>
        <input type="text" placeholder='123'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[8px]'/>
        <input type="text" placeholder='Some Society,nr.Some School'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[12px]'/>
        <input type="text" placeholder='Surat'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[12px]'/>
        <input type="text" placeholder='Gujarat'  className='px-[16px] py-[12px] rounded-lg border border-[#EEF0F3] bg-[#FFF] font-Montserrat text-[14px] font-medium text-[#5B6572] mt-[12px]'/>
   <Link to="/association" className='px-[24px] flex items-center justify-center h-[44px] rounded-lg bg-[#41B079] text-white mt-[32px] w-[136px] font-Montserrat font-semibold text-[14px]'>Save Details</Link>
      </div>
    </div>           

      </main>
      </div>
      
 
    </div>


    </>
    )
}

export default EditProfile

