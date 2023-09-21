import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Switch from '../assets/Switch.png'
import men from '../assets/men.png'
import Card from './card'
import BookingCard from './BookingCard'
import arr from '../assets/drop.png'
import { Link } from 'react-router-dom'

const Booking = ({Pending}) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    return (
      <>
      <div className='w-full  h-[1024px] scrollbar-hide'>
        <Navbar />
        <main className=' h-auto mx-[120px] pt-[24px]  mb-[48px]'>
          <div className='font-Montserrat font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>Dashboard</div>
          <div className='float-right -mt-[24px] mr-[38px] font-Montserrat font-[600] h-[16px] text-[14px]'>
            Availability
          </div>
          <img src={Switch} alt="switch" className='float-right  mx-auto -mt-[21.3px]'/>
           
          <ul className='flex items-start flex-1 h-[38px] space-x-[1px] space-y-4 font-Montserrat text-[16px] text-[#8D98A4] font-[500]'>
          <li
            className={`px-4 mt-4 cursor-pointer ${selectedItem === 'Urgent' ? ' border-b pb-[8px] text-[#E40443] border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Urgent')}
          >
            Urgent
          </li>
          <li
            className={`px-4 cursor-pointer ${selectedItem === 'Non-Urgent' ? 'border-b pb-[8px] text-[#E40443] border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Non-Urgent')}
          >
            Non-Urgent
          </li>
          <li
            className={`px-4 cursor-pointer ${selectedItem === 'Standalone' ? 'border-b pb-[8px] text-[#E40443] border-[#E40443]' : ''}`}
            onClick={() => handleItemClick('Standalone')}
          >
            Standalone
          </li>
        </ul>
        <div className='float-right -mt-5 font-Montserrat text-[14px] font-semibold flex'>All <img src={arr} alt="" className='ml-2 mt-[2px] text-[#8D98A4] h-4 w-4'/></div>
           <hr className='mt-[10px] border border-[#E1E5E8]' />
           <div className='my-[16px] font-Montserrat font-bold text-base'>All</div>
          <Link to="/startservicing" className='flex flex-row flex-wrap   '>
          <BookingCard title="Pending"/>
          <BookingCard title="Completed"/>
          <BookingCard title="Pending"/>
          <BookingCard title="Completed"/> 
          <BookingCard title="Pending"/>
          <BookingCard title="Completed"/>
          <BookingCard title="Completed"/>

          </Link>
           
        </main>
        <Footer />
      </div>
  
  
      </>
      )
  }

  
 

export default Booking
