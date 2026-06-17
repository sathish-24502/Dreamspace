import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import sofa from '../assets/sofa.png'

const SubscribeLetter = () => {
  return (
    <div className='font-poppins mx-4 my-16 max-sm:my-8 flex justify-around place-items-center'>
        <div className='grid gap-4 items-center'>
            <span className='flex items-center gap-2'>
                <FaEnvelope className='text-green-900'/>
            <h1 className='text-green-950 font-medium text-xl'>Subscribe To Newsletter</h1>
            </span>
            <span className='flex gap-2 max-sm:flex-col'>
                <input type="text" placeholder='Enter Your Name' className='border w-72 max-sm:w-60 p-2 rounded-xl focus-within:outline-none'/>
            <input type="text" placeholder='Enter Email' className='border w-72 max-sm:w-60 p-2 rounded-xl focus-within:outline-none'/>
            <button className='shadow-sm hover:shadow-gray-500 w-44 max-sm:w-32 rounded-3xl bg-green-700 text-white font-semibold hover:bg-green-900'>Send</button>
            </span>
           
        </div>

         <div className='max-sm:hidden'>
         <img src={sofa} alt="sofa" className='w-96 -mt-28'/>
            </div>
         
    </div>
  )
}

export default SubscribeLetter