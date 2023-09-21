import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Switch from '../assets/d.png'
import men from '../assets/men.png'
import Card from './Popup'
import Navbardark from './Navbardark'

const DashboardDark = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  return (
    <>
        <div className='w-full bg-black bg-opacity-40 pt-[1px]'>
      <Navbardark />
      <main className='h-[783px]  mx-[120px] pt-[24px]  '>
        <div className='font-Montserrat font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>Dashboard</div>
        <div className='float-right -mt-[24px] mr-[38px] font-Montserrat font-[600] h-[16px] text-[14px]'>
          Availability
        </div>
        <img src={Switch} alt="switch" className='float-right  mx-auto -mt-[21.3px]'/>
         
        <ul className='flex items-start flex-1 h-[38px] space-x-[1px]  space-y-4 font-Montserrat text-[16px] text-[#5e6165] font-[500] '>
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
         <hr className='mt-[10px] border border-[#5e6165] ' />
         <Card />
          <img src={men} alt="men" className='mt-[16px] justify-center mx-auto relative'  />
      </main>
      <Footer />
    </div>
</>
  )
}
export default DashboardDark
