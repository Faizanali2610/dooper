import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Successfull from './Successfull';
import SuccessCard from './SuccessCard';
import plus from "../assets/square-plus.png"
import cloud from "../assets/upload.png"

const ReportCard = () => {
    const fileInputRef = useRef(null);

    const handleFileInputClick = () => {
      fileInputRef.current.click();
    };
  return (
    <div className='absolute top-0 left-0 w-full h-[1215px] flex items-center justify-center bg-black bg-opacity-70 z-30'>
    <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30 '>
    <div className='w-[600px] h-[319px] p-[32px] bg-white rounded-2xl ml-[420px] relative z-30' >
       <h1 className=' flex text-[#1A1C1F] text-[28px] font-[600] mt-2'>Add Report</h1>
       <div className='  mt-[24px]'>
        <h2 className=' font-Montserrat  text-[12px] font-[500]  px-[4px]  text-[#8D98A4]'>Report card
  </h2>
  <img src={plus} alt="plus" srcset="" className='ml-[507px] h-[24px] w-[24px] -mt-[22px] '/>
  <div className='px-[20px] py-[16px] rounded-lg border border-[#EEF0F3] mt-[8px] mb-[32px]'>
  <label onClick={handleFileInputClick} className='cursor-pointer' >
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
    <img src={cloud} alt="" srcset="" className='mx-auto'/>
    <h1 className='font-Montserrat text-[14px] font-[500] text-[#5B6572] flex items-center justify-center mt-[8px]'>Drag an image or Upload</h1>
 </label>
  </div>
       </div>
        <div className=' flex justify-center space-x-[8px]'>
       <Link to="/downloadreport" className='flex items-center justify-center rounded-lg font-Montserrat  text-[14px] font-[600] bg-[#E40443] w-full px-[24px] text-[#ffffff] h-[44px]' > Submit Report</Link>      
            
            </div>
          
    </div>
    </div>
    </div>
  )
}

export default ReportCard
