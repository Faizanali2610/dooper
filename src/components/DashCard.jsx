import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Switch from '../assets/Switch.png'
import men from '../assets/men.png'
import Card from './card'
import { ThemeProvider } from 'styled-components'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
// import { ThemeProvider } from '@mui/material'

const DashCard = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    return (
      <>
      <div className='w-full  h-[1024px]  '>
        <Navbar />
        <main className='h-auto  mx-[120px] pt-[24px] pb-[48px] '>
          <div className='font-Montserrat font-[700] text-[22px] h-[32px] w-[1077px] pb-[8px]'>Dashboard</div>
          <div className='float-right -mt-[24px] mr-[38px] font-Montserrat font-[600] h-[16px] text-[14px]'>
            Availability
          </div>
          <img src={Switch} alt="switch" className='float-right  mx-auto -mt-[21.3px]'/>
         ;
          <ul className='flex items-start flex-1 h-[38px] space-x-[1px] space-y-4 font-Montserrat text-[16px] text-[#8D98A4] font-[500]'>
          <li
            className={`px-4 mt-4 cursor-pointer ${selectedItem === 'Urgent' ? ' border-b text-black pb-[8px] border-[#E40443]' : ''}`}
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
          <div className='flex flex-row flex-wrap justify-between  space-y-[24px]'>
         
          <Card />
           <Card />
           <Card />
           <Card />
       
          </div>
           
        </main>
        <Footer />
      </div>
  
  
      </>
      )
  }

  
 

export default DashCard
