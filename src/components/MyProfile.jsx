import React from 'react'
import Navbar from './Navbar'
import editimage from "../assets/Photo.png"
import icon from "../assets/icon.png"
import arrowicon from "../assets/ic (3).png"
import profile from "../assets/User.png"
import wallet from "../assets/Frame (1).png"
import phone from "../assets/Call.png"
import privacy from "../assets/Vector (3).png"
import terms from "../assets/terms.png"
import info from "../assets/info.png"
import star from "../assets/star (1).png"
import logout from "../assets/logout (1).png"
import { Link } from 'react-router-dom'





const MyProfile = () => {

   
  
    return (
      <>
      <div className='w-full h-auto'>
        <Navbar />
        <div className='bg-[#F4F4F4] '>
        <main className='  mx-[120px] pt-[24px] pb-[48px]  '>
          <div className='font-Montserrat flex flex-row font-[700] text-[22px]  w-[1077px] pb-[8px]'>
             My Profile</div>
           <div className='h-[656px] w-[454px] rounded-2xl p-[32px] bg-white mt-[32px]'>
            <div className='flex  pt-[12px]  pb-[20px] relative border-b borde-[gray]'>
                <img src={editimage} alt="phone" className='w-[48px] h-[48px] rounded-full ' />
                <Link to="/editprofile">
                <img src={icon} alt="icon" className='absolute top-0 left-0 mt-7 ml-4' />
                </Link>
                 <div className='ml-[16px]'>
                    <h1 className='font-Montserrat text-[14px] font-[600] text-black'>Jaydip Sakhiya</h1>
                    <h2 className='font-Montserrat text-[14px] font-[500] text-[#5B6572]'>Balance : 2000INR</h2>
                    <Link to="/editprofile">
                 <img src={arrowicon} alt="" className='ml-[309px] -mt-[29px] w-[16px] h-[16px]'/>
                 </Link>
                 </div>
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={profile} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Edit Profile</h1>
              <Link to="/editprofile">
              <img src={arrowicon} alt="" className='ml-[248px] mt-[3px] w-[16px] h-[16px]'/>   
              </Link>
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={wallet} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>My Earnings</h1>
              <Link to="/earning">
            <img src={arrowicon} alt="" className='ml-[237px] mt-[3px] w-[16px] h-[16px]'/>       
               </Link>
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={phone} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Contact Us</h1>
              <img src={arrowicon} alt="" className='ml-[248px] mt-[3px] w-[16px] h-[16px]'/>         
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={privacy} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Privacy Policy</h1>
              <img src={arrowicon} alt="" className='ml-[226px] mt-[3px] w-[16px] h-[16px]'/>
           
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={terms} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Terms & Conditions</h1>
              <img src={arrowicon} alt="" className='ml-[180px] mt-[3px] w-[16px] h-[16px]'/>
           
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={info} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>About Us</h1>
              <img src={arrowicon} alt="" className='ml-[262px] mt-[3px] w-[16px] h-[16px]'/>
           
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={star} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Rate Us</h1>
              <img src={arrowicon} alt="" className='ml-[275px] mt-[3px] w-[16px] h-[16px]'/>
           
            </div>
            <div className='py-[20px] flex flex-row  border-b-[1px]'>
              <img src={logout} alt="pro"  className='w-[20px] h-[20px] mt-[2px]'/>
              <h1 className='font-Montserrat font-medium text-[16px] ml-[16px]'>Logout</h1>
              <img src={arrowicon} alt="" className='ml-[279px] mt-[3px] w-[16px] h-[16px]'/>
           
            </div>
           </div> 
        </main>
        </div>
        
        
      </div>
  
  
      </>
      )
  }

export default MyProfile
