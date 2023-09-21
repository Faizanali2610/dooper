import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Successfull from './Successfull';
import SuccessCard from './SuccessCard';

const OtpCard = ({ showSuccessPage }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  
    const handleOtpChange = (e, index) => {
      const newOtp = [...otp];
  
      // Ensure the value is a single digit (0-9)
      const inputValue = e.target.value.slice(-1).replace(/[^0-9]/g, '');
  
      // Update the OTP array with the single digit
      newOtp[index] = inputValue;
      setOtp(newOtp);
  
      // Move focus to the next input if available
      if (index < otp.length - 1 && inputValue !== '') {
        inputRefs[index + 1].current.focus();
      }
    };
  return (
    <div className='absolute top-0 left-0 w-full h-[1215px] flex items-center justify-center bg-black bg-opacity-70 z-30'>
    <div className='absolute -ml-[208px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[96px] z-30 '>
    <div className='w-[600px] h-[319px] p-[32px] bg-white rounded-2xl ml-[420px] relative z-30' >
       <h1 className=' flex text-[#1A1C1F] text-[32px] font-[700] items-center justify-center'>Verify</h1>
        <h2 className='flex items-center justify-center font-Montserrat text-[#1A1C1F] text-[14px] font-[500]'>Ask patient for OTP</h2>
        <div className=' flex justify-center space-x-[8px]'>
              {otp.map((value, index) => (
                <>
              
              <div key={index} className="relative">
                <input
                  key={index}
                  type='text'
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  className='border font-Montserrat relative border-gray-300 rounded-md w-[64px] h-[64px] my-[40px] text-center text-[14px] font-[500] '
                  maxLength="1"
                  ref={inputRefs[index]} 
                />
             </div>
             </> ))}
            </div>
            {showSuccessPage ? (
            <Link to="/successfullpage" className='inline-block  bg-[#E40443] w-full pl-[230px] pt-[12px] items-center h-[44px] rounded-lg font-Montserrat text-[14px] font-[600] text-white'>Verify OTP</Link>
          ) : (
            <Link to="/endservice" className='inline-block  bg-[#E40443] w-full pl-[230px] pt-[12px] items-center justify-center h-[44px] rounded-lg font-Montserrat text-[14px] font-[600] text-white pr-[225px] pb-[8px]'>Verify OTP</Link>
          )}
    </div>
    </div>
    </div>
  )
}

export default OtpCard
