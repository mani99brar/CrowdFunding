import React from 'react'
import {search,thirdweb,profilePolice,locationChose,camera,gallery } from '../assets';
import { CountBox ,Alert,CustomButton,FormField} from '../components';
const AlertFeedback = () => {
  return (
    <div>
      <div className='flex justify-between w-full'>
        <div className='lg:flex-1 flex flex-row w-[310px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
                <input type="text" placeholder='Search For Vehicle' className='flex w-full font-epilogue font-normal text-[14px] palceholder:text-[#4b5264] text-white bg-transparent outline-none' />
                <div className='w-[72px] h-full bg-[#4acd8d] flex justify-center items-center cursor-pointer rounded-[100px]'>
                    <img src={search} alt="search" className='w-[25px] h-[15px] object-contain' />
                </div>
                

        </div>
        <div className=' w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer overflow-hidden'>
                        <img src={profilePolice} alt="" className='w-[50px]' />
        </div>
        </div>
        <div>
            <h2 className='flex flex-col text-white text-[30px] font-bold mt-10'>Alert Feedback</h2>
            <h2 className='flex flex-col text-white text-[20px] font-bold mt-10'>Vehicle Number : HR00XX0000</h2>
        <div className='flex flex-col'>
      <FormField
            labelName="Details"
            placeholder="Any"
            inputType="text"
            value={''}
            handleChange={()=>{}}
          />
          <div className=''>
            <h3 className='text-[#808191]'>Image</h3>
            <div className='flex flex-1 w-full my-5 justify-between'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                    <img className='w-[50%] mb-2' src={camera} alt="" />
                    <p className='text-white'>Take Photo</p>
                </div>
                
                <div className='w-[40%] flex flex-col items-center justify-center'>
                    <img className='w-[50%] mb-2' src={gallery} alt="" />
                    <p className='text-white'>Chose Photo</p>
                </div>
            </div>
          </div>
          
          <label htmlFor="" className='text-[#808191]'>Last Seen</label>
          <div className='flex flex-col my-3 items-center'>
            <img src={locationChose} className="w-[100%]" alt="" />
          </div>
          <CustomButton 
        btnType="button"
        title="Send Feedback"
        styles='bg-[#700] mt-12 w-[100%] text-[25px]'

        />
      </div>
        </div>
        
    </div>
  )
}

export default AlertFeedback
