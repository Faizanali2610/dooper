import React from 'react'
import cal from "../assets/calendar.png"
import clock from "../assets/clock.png"
import pro from "../assets/Ellipse 2.png"

const BookingCard = ({title}) => {
  const titleStyles = {
    'Pending': {
      color: 'black', // Red text color
      backgroundColor: '#FDF0CC', // Yellow background color
      marginLeft: '53px'
    },
    'Completed': {
      color: '#41B078', // Green text color
      backgroundColor: '#f4fff1', // Blue background color
      marginLeft: '40px'
  
    },
    'Reject': {
      color: '#000000', // Black text color
      backgroundColor: '#FFFFFF' // White background color
    }
    // Add more titles and corresponding styles as needed
  };

  // Get the styles based on the title
  const styles = titleStyles[title] || {};
  return (
    <div className='w-[350px] border-[1px] h-[150px] border-[#D3D3D3]  rounded-xl mr-[30px] mb-[30px]'>
      <div className="flex flex-col border-b-[1px] border-[#E4E4E4] px-[16px] py-[14px] top-0  justify-center items-start  ">
   <div className='flex flex-row  gap-[8px]'>
    <h1 className='text-[#E40443] font-Montserrat text-[18px] font-[600] mr-[48px] mx-auto '>#123456</h1>
    <h2 className='flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1 '><img src={cal} alt="" className='h-[14px] w-[14px] mt-[2px] mr-[8px]'  />13 June, 2023</h2>
    <h2 className='flex font-Montserrat text-[12px] font-[500] text-[#5B6572] pt-1'><img src={clock} alt="" className='h-[14px] w-[14px] mt-[2px] mr-[8px]'  />09:00AM</h2> 
  </div>
<div className='text-[#E40443] font-Montserrat  text-[12px] font-[600] tracking-[1px]'>Test 1 | Test 2 | Test 3</div>
</div>
<div className='py-[14px] px-[16px] h-[76px] border-b-[1px] border-[#E4E4E4] '>
<img src={pro} alt="pro" className='' />
<div className='font-Montserrat text-[18px] font-[600] ml-[62px] -mt-[47px]'>Patient Name <span className='mx-auto mb-[2px] h-[20px] w-[48px] rounded-3xl py-[5px] px-[12px] text-[10px] font-medium ml-[42px] text-end' style={{ backgroundColor: styles.backgroundColor, color: styles.color,marginLeft: styles.marginLeft || '0px' }}>{title}</span></div>
<h3 className='font-Montserrat text-[12px] font-[500] ml-[63px] '>XYZ, street name, City <span className='mx-auto ml-[32px]'>Earning : 400</span></h3>
</div>
    </div>
  )
}

export default BookingCard
