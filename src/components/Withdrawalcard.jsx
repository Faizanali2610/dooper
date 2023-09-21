import React from 'react'

const Withdrawalcard = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-[1245px] flex items-center justify-center bg-[black] bg-opacity-[40%] z-30'>
    <div className='absolute -ml-[18px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-[190px] z-30 '>
  
    <div className='py-[50px] w-[438px] px-[30px] bg-white rounded-lg'>
      <h1 className='font-Montserrat text-lg font-medium  text-center items-center'>Your <span className='text-[#E40443]'>Withdrawal</span> request have been submitted</h1>
    <button className='flex mx-auto text-white  items-center justify-center px-[4px] h-[38px] mt-[49px] bg-[#E40443] w-[226px] rounded-lg'>Done</button>
    </div>
    </div>
    </div>

  )
}

export default Withdrawalcard
