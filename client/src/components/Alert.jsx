import React from 'react'
import {whiteinnova,logoLocation} from '../assets'
import {CustomButton} from "./"

const Alert = () => {
  return (
    <div className='my-5 p-5 border-solid border-[rgb(59,59,56)] border-[3px] border-spacing-2'>
        <div className='flex flex-row justify-between mb-5'>
        <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>HR03M2185</h1>
      <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>White Innova</h1>
      
        </div>
      <div className='flex flex-row items-center gap-5'>
        <div className='w-[150px]'>
            <img className='object-contain'  src={whiteinnova} alt="" />
        </div>
        <div >
            <p className='text-white text-[16px] flex flex-row items-center'>Last seen<span> <img className='w-[15px] mx-3' src={logoLocation} alt="" /> </span> </p>
            <p className='text-white'>Near Ramada Hotel</p>
        </div>
        
      </div>
      <CustomButton 
        btnType="button"
        title="ALERT"
        styles='bg-[#1dc071] my-5 w-full'

        />
        
    </div>
  )
}

export default Alert
