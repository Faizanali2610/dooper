import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Switch from '../assets/Switch.png'
import arr from '../assets/arrow left.png'
import { Link } from 'react-router-dom'
import pro from "../assets/Ellipse 2.png"
import cal from "../assets/calendar.png"
import clock from "../assets/clock.png"
import no from "../assets/no.png"
import one from "../assets/2.png"
import two from "../assets/3.png"
import three from "../assets/4.png"
import line from "../assets/Line 5.png"
import rl from "../assets/rlarrow.png"
import bg from "../assets/Background.png"

import av1 from "../assets/Avatar (1).png"
import av2 from "../assets/Avatar (2).png"
import av3 from "../assets/Avatar (3).png"
import av4 from "../assets/Avatar (4).png"
import av5 from "../assets/Avatar (5).png"





const Notifications = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
    <div className='w-full '>
      <Navbar />
      <div className=''>
      <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
        <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>
          <img src={arr} alt="arr" srcset="" className='h-[24px] w-[24px] mt-1 mr-[8px]' />
           Notifications</div>
           <hr className='mt-[28px]'/>
           <div className='flex flex-row items-end justify-end mt-[23px] mb-[23px] '>
           <div className='font-sans text-center text-[12px] font-[600] underline text-[#E40443] mr-[57px]'>
           Mark all as read
           </div>
           <div className='font-sans text-center text-[12px] font-[600] underline text-[#E40443] mr-[57px]'>
           Clear all 
           </div>
           <h1 className='font-sans text-center text-[15px] font-[400] text-[#4B465C] mr-[33px] opacity-[50%]'>1-10 of 10</h1>
          <img src={rl} alt="rl"  />
           </div>
           <hr />
           <div className='flex flex-rowpx-[14px] py-[20px] '>
             <img src={av1} alt="" className='rounded-full ml-[20px]' />
             <h2 className='ml-5 font-Montserrat text-[16px] font-medium text-[#5B6572] mt-1'>Lorem ipsum dolor sit amet, </h2>
              <h3 className='ml-[720px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>25-07-2023</h3>
              <h4 className='ml-[35px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%] '>5:10 AM</h4>
            </div>
            <hr />
           <div className='flex flex-rowpx-[14px] py-[20px] '>
             <img src={av2} alt="" className='rounded-full ml-[20px]' />
             <h2 className='ml-5 font-Montserrat text-[16px] font-medium text-[#5B6572] mt-1'>Lorem ipsum dolor sit amet, </h2>
              <h3 className='ml-[720px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>25-07-2023</h3>
              <h4 className='ml-[35px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%] '>5:10 AM</h4>
            </div>
            <hr />
           <div className='flex flex-rowpx-[14px] py-[20px] '>
             <img src={av3} alt="" className='rounded-full ml-[20px]' />
             <h2 className='ml-5 font-Montserrat text-[16px] font-medium text-[#5B6572] mt-1'>Lorem ipsum dolor sit amet, </h2>
              <h3 className='ml-[720px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>25-07-2023</h3>
              <h4 className='ml-[35px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%] '>5:10 AM</h4>
            </div>
            <hr />
           <div className='flex flex-rowpx-[14px] py-[20px] '>
             <img src={av2} alt="" className='rounded-full ml-[20px]' />
             <h2 className='ml-5 font-Montserrat text-[16px] font-medium text-[#5B6572] mt-1'>Lorem ipsum dolor sit amet, </h2>
              <h3 className='ml-[720px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>25-07-2023</h3>
              <h4 className='ml-[35px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%] '>5:10 AM</h4>
            </div>
            <hr />
           <div className='flex flex-rowpx-[14px] py-[20px] '>
             <img src={av4} alt="" className='rounded-full ml-[20px]' />
             <h2 className='ml-5 font-Montserrat text-[16px] font-medium text-[#5B6572] mt-1'>Lorem ipsum dolor sit amet, </h2>
              <h3 className='ml-[720px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>25-07-2023</h3>
              <h4 className='ml-[35px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%] '>5:10 AM</h4>
            </div>
            <hr />
           <div className='flex flex-row py-[20px] '>
             <img src={av5} alt="" className='rounded-full ml-[20px]' />
             <h2 className='ml-5 font-Montserrat text-[16px] font-medium text-[#5B6572] mt-1'>Lorem ipsum dolor sit amet, </h2>
              <h3 className='ml-[720px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>25-07-2023</h3>
              <h4 className='ml-[35px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%] '>5:10 AM</h4>
            </div>
            <hr />
            <div className='flex flex-rowpx-[14px] py-[20px] '>
             <img src={av4} alt="" className='rounded-full ml-[20px]' />
             <h2 className='ml-5 font-Montserrat text-[16px] font-medium text-[#5B6572] mt-1'>Lorem ipsum dolor sit amet, </h2>
              <h3 className='ml-[720px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%]'>25-07-2023</h3>
              <h4 className='ml-[35px] mr-[20px] pt-[6px] font-sans font-normal text-[#4B465C] text-[13px] opacity-[50%] '>5:10 AM</h4>
            </div>
            <hr />
      </main>
 
         
      </div>
      
    </div>


    </>
    )
}

export default Notifications
