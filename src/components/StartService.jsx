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
import both from "../assets/ic (4).png"


const StartService = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
    <div className='w-full '>
      <Navbar />
      <div className='bg-[#F4F4F4]'>
      <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
        <div className='font-Montserrat flex flex-row font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>
          <Link to="/dashboardbooking">
          <img src={arr} alt="arr" srcset="" className='h-[24px] w-[24px] mt-1 mr-[8px]' /></Link>
           Case #123456</div>
           <div className=' h-[534px] w-[774px] mt-[8px] rounded-2xl  border bg-white'>
           <div className='h-[122px] py-[12px]  px-[20px]  flex items-start self-stretch '>
            <img src={pro} alt="pro" srcset="" className='w-[88px] h-[88px] ' />
             <h1 className='font-Montserrat text-[16px font-semibold ml-[16px] mt-[4px]'>Patient Name</h1>
             <h2 className='text-[#5B6572] font-Montserrat text-[16px] font-medium  -ml-[113px] mt-[27px]'>xyz , Street name</h2>
             <h3 className='text-[#5B6572] font-Montserrat text-[10px] font-medium  -ml-[138px] mt-[51px]'>Age : 32 | Gender: Male | Blood Group: O+ <br /> Height : 6” 3 inches | Weight : 76</h3>
           <img src={both} alt="" srcset="" className='ml-[338px] mt-[30px]' />
           </div>
           <div className=' border-b-red '>
              <ul className='flex py-[8px] px-[12px] items-center border border-t-[#EEF0F3]'>
                <li className='py-[8px] px-[10px] items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2'>Test 1</li>
                <li className='py-[8px] px-[10px] items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2'>Test 2</li>
                <li className='py-[8px] px-[10px] items-center rounded-lg border border-[#DBDDDF] text-[12px] font-Montserrat font-medium mr-2'>Test 3</li>
                <Link  className='py-[8px] px-[10px]  text-end rounded-lg border bg-[#E40443] text-white text-[12px] font-Montserrat font-medium ml-[417px]'>View Prescription</Link>

              </ul>
           </div>
           <div className='h-[84px] py-[20px] px-[20px] border-t-[#EEF0F3]'>
              <h1 className='font-Montserrat text-[14px] font-medium'>Request For</h1>
              <h2 className='flex font-Montserrat text-[12px] font-medium mt-[8px] w-[345px]'><img src={cal} alt="cal" className='h-4 w-4 mr-[7px]' srcset="" />13 June, 2023</h2>
              <h3 className='flex font-Montserrat text-[12px] font-medium -mt-[19px] ml-[372px]'><img src={clock} alt="cal" className='h-4 w-4 mr-[7px] mt-[1px]' srcset="" />9 : 00 AM</h3>
           </div>

           <div className='py-[20px] px-[20px] h-[276px] pt-[12px] mb-[24px] border border-t-[#EEF0F3]'>
           <img src={no} alt="no" srcset="" className='' />
           
           <div className='flex flex-row h-[36px] ml-[34px] -mt-8  mb-[32px] ' >
            <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium '>Lab test details</h1>
            <h2 className=' font-Montserrat  text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[93px]'>Assigned</h2>
            <div className='w-[1px] height-[142px] absolute letf-[36px] mt-[26px] bg-[#090d10]'></div>
            </div>
            <img src={one} alt="no" srcset="" className='' />
            <img src={line} alt="line" srcset="" className='bg-[#E3E6E8] absolute -mt-[69px] h-[106px] ml-[15px]' />

           
           <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[32px]' >
            <Link to={"/serviceverify"} className='ml-[20px] font-Montserrat text-[12px] font-medium '>Start Service</Link>
            <h2 className=' font-Montserrat  text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[76px]'>18, June 2023</h2>
            <div className='w-[1px] height-[142px] absolute letf-[36px] mt-[26px] bg-[#090d10]'></div>
            </div>
            <img src={two} alt="no" srcset="" className='' />
           
           <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[32px]' >
            <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium '>Sample collected</h1>
            <h2 className=' font-Montserrat  text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[103px]'>18, June 2023</h2>
            <div className='w-[1px] height-[142px] absolute letf-[36px] mt-[26px] bg-[#090d10]'></div>
            </div>
            <img src={three} alt="no" srcset="" className='' />
           
           <div className='flex flex-row h-[36px] ml-[34px] -mt-8 mb-[32px]' >
            <h1 className='ml-[20px] font-Montserrat text-[12px] font-medium '>Complete</h1>
            <h2 className=' font-Montserrat  text-[12px] text-[#5B6572] font-normal mt-[19px] -ml-[58px] '>18, June 2023</h2>
            <div className='w-[1px] height-[142px] absolute letf-[36px] mt-[26px] bg-[#090d10] '></div>
            </div>
            
            
           </div>
           
           </div>
           
           
      </main>
      </div>
      
      <Footer />
    </div>


    </>
    )
}

export default StartService
