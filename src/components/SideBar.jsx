import React from 'react'
import Profile from "../assets/profile.png"
import star from "../assets/star.png"

const SideBar = () => {
  return (
    <div className=' w-[560px]  rounded-[16px] p-[56px] bg-primary-darker'>
      <h1 className='text-white  font-Montserrat text-base  font-semibold leading-[110%]'>DOOPER</h1>
       <h2 className='h-[108px] flex text-white mt-[112px] w-[326px] font-montserrat text-[40px] font-bold leading-[135%]'>Start your journey with us</h2>
       <h3 className='text-[#FFF] font-Montserrat text-[28px] mt-[14px] font-normal leading-[130%] w-[357px] h-[108px]'>Discover the world’s best community of doctors and DHAs</h3>
    {/* card */}
    <div className='w-[448px] h-[254px] p-[32px] bg-white mt-[254px] rounded-[16px]'>
    <div className='font-Montserrat text-[#1A1C1F] w-[384px] h-[102px] text-[20px] font-normal leading-[170%]'>Simply unbelievable! I am really satisfied with the doctor who treated me. This is absolutely wonderful!</div> 
    <img src={Profile} alt="profile" className='mt-[32px] h-[56px] w-[56px] rounded-[8px]' />
    <div className='font-Montserrat text-[18px] font-[600] text-black leading-[120%] -mt-[52px] ml-[72px]'>Timson K</div>
     <ul className='ml-[70px] mt-[9px] h-[16px] w-[88px] flex space-x-[3px]'>
        <li><img src={star} alt="" className='h-[16px] w-[16px]'/></li>
        <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
        <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
        <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
        <li><img src={star} alt="" className='h-[16px] w-[16px]' /></li>
     </ul>
    </div>
    </div>
  )
}

export default SideBar
