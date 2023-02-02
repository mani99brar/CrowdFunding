import React from 'react'
import { CustomButton,FormField } from '../components'
const Login = () => {
  return (
    <div className='flex flex-col justify-center w-full'>
      <h1 className='absolute text-[#78c374] text-[40px] font-bold font-epilogue w-full right-[-75px] top-[10%]'> <span className=' border-b-4  border-[#808191] pb-2'>Smart Naka</span> </h1>
      <h1 className=' text-white font-epilogue text-[30px] mt-10'>Login</h1>
      <div className='flex flex-col'>
      <FormField
            labelName="Your Username*"
            placeholder="username1"
            inputType="text"
            value={''}
            handleChange={()=>{}}
          />
          <FormField
            labelName="Your Password *"
            placeholder="********"
            inputType="text"
            value={''}
            handleChange={()=>{}}
          />
          <CustomButton 
        btnType="button"
        title="Login"
        styles='bg-[#1dc071] mt-12 w-[100%] text-[25px]'

        />
      </div>
      <div className='flex flex-row mt-20 justify-between w-full'>
        <CustomButton 
        btnType="button"
        title="Change Language"
        styles='bg-[rgb(115,12,142)] w-[200px]'

        /><CustomButton 
        btnType="button"
        title="Contact US"
        styles='bg-[rgb(115,12,142)]'

        />
        </div>
    </div>
  )
}

export default Login
