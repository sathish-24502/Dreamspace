import React from 'react';
import {FaUser , FaCartPlus , FaBars} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between max-sm:items-center px-40 max-sm:px-8 max-sm:py-4 py-8 font-semibold max-sm:shadow-sm max-sm:fixed max-sm:top-0 max-sm:z-10 bg-orange-400 font-poppins max-sm:w-full'>
        <h1 className='text-2xl font-sans text-white border-l-2 rounded-2xl p-1 max-sm:text-sm'>DreamSpace.</h1>
        <div className='flex justify-between items-center gap-10 max-sm:hidden'>
          <p className='text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 shadow shadow-slate-200'>Home</p>
          <p className='text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Shop</p>
          <p className='text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>About us</p>
          <p className='text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Services</p>
          <p className='text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Blog</p>
          <p className='text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Contect</p>
          <FaUser title='Profile' className=''/>
          <FaCartPlus title='Cart'/>
        </div>
        <div className='hidden max-sm:flex  rounded-sm text-white'>
          <FaBars/>
        </div>
      </div>

    </>
  )
}

export default Navbar