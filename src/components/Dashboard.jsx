import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Switch from '../assets/Switch.png'
import men from '../assets/men.png'
import { Link } from 'react-router-dom'
const Dashboard = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
    <div className='w-full h-[2720px]'>
      <Navbar />
      <main className='h-[783px]  mx-[120px] pt-[24px] '>
        <div className='font-Montserrat font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>Dashboard</div>
        <div className='float-right cursor-pointer -mt-[24px] mr-[38px] font-Montserrat font-[600] h-[16px] text-[14px]'>
         <Link to={"/dashboardcard"}>Availability </Link>
        </div>
        <img src={Switch} alt="switch" className='float-right  mx-auto -mt-[21.3px]'/>
         
        <ul className='flex items-start flex-1 h-[38px] space-x-[1px]  space-y-4 font-Montserrat text-[16px] text-[#8D98A4] font-[500]'>
        <li
          className={`px-4 mt-4 cursor-pointer ${selectedItem === 'Urgent' ? ' border-b pb-[8px] text-black border-[#E40443]' : ''}`}
          onClick={() => handleItemClick('Urgent')}
        >
          Urgent
        </li>
        <li
          className={`px-4 cursor-pointer ${selectedItem === 'Non-Urgent' ? 'border-b pb-[8px] text-black border-[#E40443]' : ''}`}
          onClick={() => handleItemClick('Non-Urgent')}
        >
          Non-Urgent
        </li>
        <li
          className={`px-4 cursor-pointer ${selectedItem === 'Standalone' ? 'border-b pb-[8px] text-black border-[#E40443]' : ''}`}
          onClick={() => handleItemClick('Standalone')}
        >
          Standalone
        </li>
      </ul>
         <hr className='mt-[10px] border border-[#E1E5E8]' />
          <img src={men} alt="men" className='mt-[16px] justify-center mx-auto'  />
      </main>
      <Footer />
    </div>


    </>
    )
}

export default Dashboard
