import React from 'react'
import dooper from "../assets/dooper.png"
import arr from '../assets/arrow.png'
import photo from "../assets/photo.png"
import not from "../assets/not.png"
import { Link } from 'react-router-dom'

 
const Navbar = () => {
  return (
  <>
    <div className=' h-[44px]  py-[4px] my-[40px] mx-[120px]   '>
            <img src={dooper} alt='jjjj' className='h-[36px] w-[123.55px]  '/>
        <ul className='flex flex-row float-right -mt-[30px] font-Montserrat text-[#8D98A4] justify-between space-x-[16px] h-[16px] '>
            <li className=''>Dooper At Home</li>
            <li>Lab Tests</li>
            <li>Our Network</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Join us with <img src={arr} alt="" srcset="" className='float-right mt-[1px] ml-[4px]' /></li>
            <Link to="/myprofile" className='h-[44px] w-[177px] bg-[#F4F4F4] flex py-[8px] px-[5px] items-center -mt-[10.7px] border border-solid rounded-[8px] border-[#F5F6F7]'>
            <img src={photo} alt="" srcset="" className='h-[28px] w-[28px] ' />
            <h1 className='text-[14px] font-[500] font-Montserrat pl-[6px] pr-[6px]'>Jaydip Sakhiya</h1>
            <img src={arr} alt="" className='font-Montserrat text-[14px] font-[500] leading-[116%]' />
            </Link>
            <Link to="/notifications">
            <img src={not} alt="" srcset="" className='h-[40px] w-[40px] -mt-[8px]' />
            </Link>
        </ul>
    </div>
    <hr className='bg-[#E3E6E8] border' />
    </>
  )
}

export default Navbar
