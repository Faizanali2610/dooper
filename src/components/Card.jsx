import React from 'react'
import cal from "../assets/calendar.png"
import clock from "../assets/clock.png"
import pro from "../assets/Ellipse 2.png"
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='w-[380px] h-[210px] border-[1px] border-[#D3D3D3] rounded-xl mt-[24px]'>
      <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0  justify-center items-start ">
   <div className='flex flex-row w-[348px] gap-[8px]'>
    <h1 className='text-[#E40443] font-Montserrat text-[18px] font-[600] pr-[80px]'>#123456</h1>
    <h2 className='flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1 '><img src={cal} alt="" className='h-[14px] w-[14px] mt-[2px] mr-[8px]'  />13 June, 2023</h2>
    <h2 className='flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1'><img src={clock} alt="" className='h-[14px] w-[14px] mt-[2px] mr-[8px]'  />09:00AM</h2> 
  </div>
<div className='text-[#E40443] font-Montserrat  text-[12px] font-[600] tracking-[1px]'>Test 1 | Test 2 | Test 3</div>
</div>
<div className='py-[14px] px-[16px] h-[76px] border-b-[1px] border-[#E4E4E4] '>
<img src={pro} alt="pro" className='' />
<h1 className='font-Montserrat text-[18px] font-[600]  ml-[62px] -mt-[47px]'>Patient Name</h1>
<h2 className='font-Montserrat text-[12px] font-[500] ml-[63px] '>XYZ, street name, City <span className='ml-16'>Earning : 400</span></h2>
</div>
<div className='py-[13px] px-[16px] h-[56px]'>
<Link to="/dashboardbooking" className='inline-block text-white text-center font-Montserrat text-[12px] font-semibold bg-[#E40443] px-[24px] w-[168px] py-[6px] rounded-lg'>Accept</Link>
<button className='text-[#898989] text-center font-Montserrat text-[12px] font-semibold bg-white border border-[#898989] ml-[10px] px-[24px] w-[168px] py-[6px] rounded-lg'>Reject</button>

</div>
    </div>
  )
}

export default Card
