import React from 'react'
import {search,thirdweb,profilePolice } from '../assets';
import { CountBox ,Alert,CustomButton} from '../components';
const NakaHome = () => {
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
        

        <div className='flex flex-row flex-wrap py-6 gap-12'>
            <CountBox 
            title="Robbed Vehicles"
            value="26"
            />
            <CountBox 
            title="Caught Vehicles"
            value="12"
            />
            
            <CountBox 
            title="Reports"
            value="3"
            />
            
            <CountBox 
            title="Active Nakas"
            value="5"
            />

        </div>
        <div className='flex flex-col py-5'>
            <h1 className='text-white font-epilogue text-[32px] font-bold'>Alerts(1)</h1>
            <div className='flex flex-row gap-12'>
                <Alert />
            </div>
        </div>
        <CustomButton
            title="Add New Alert"
            btnType="button"
            styles="bg-[#700] w-full"
        />
    </div>
  )
}

export default NakaHome
