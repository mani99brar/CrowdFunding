import React from 'react'
import {search,thirdweb,profilePolice } from '../assets';
import { CountBox ,Alert,CustomButton} from '../components';

const VehicleDetails = () => {
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
        <div className='flex flex-col justify-center mt-[50px]'>
            <h1 className='text-white text-[30px] font-bold font-epilogue mb-[20px]'> <span className='border-b-2 pb-2'> Vehicle Details</span> </h1>
            <div className='flex flex-col'>

                
            <div className='flex flex-row justify-between text-white text-[20px] mt-5 border-2 p-3 rounded-[10px] border-[#777]'>
                    <p className='text-white'>Number :</p>
                    <p className='text-[#47e99b]'>HR00MX0000</p>
                </div>
                <div className='flex flex-row justify-between text-white text-[20px] mt-5 border-2 p-3 rounded-[10px] border-[#777]'>
                    <p className='text-white'>IssuedTo :</p>
                    <p className='text-[#47e99b]'>Saurabh Goyal</p>
                </div>
                <div className='flex flex-row justify-between text-white text-[20px] mt-5 border-2 p-3 rounded-[10px] border-[#777]'>
                    <p className='text-white'>Expiry :</p>
                    <p className='text-[#47e99b]'>27/11/2024</p>
                </div>
                <div className='flex flex-row justify-between text-white text-[20px] mt-5 border-2 p-3 rounded-[10px] border-[#777]'>
                    <p className='text-white'>Status :</p>
                    <p className='text-[#47e99b]'>Valid</p>
                </div>
                
                <div className='flex flex-row justify-between text-white text-[20px] mt-5 border-2 p-3 rounded-[10px] border-[#777]'>
                    <p className='text-white'>IssuedBy :</p>
                    <p className='text-[#47e99b]'>Akshat Gupta</p>
                </div>
            </div>
            <CustomButton 
        btnType="button"
        title="ALERT"
        styles='bg-[#700] my-16 w-full'

        />
        </div>
    </div>
  )
}

export default VehicleDetails
