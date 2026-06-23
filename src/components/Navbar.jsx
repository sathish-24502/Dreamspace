import React from 'react';
import {FaUser , FaCartPlus , FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between max-sm:items-center px-40  max-sm:px-8 max-sm:py-4 py-8 max-xl:px-8 font-semibold max-sm:shadow-sm max-sm:fixed max-sm:top-0 max-sm:z-10 max-xl:text-sm bg-orange-400 font-poppins max-xl:w-screen max-sm:w-screen'>
        <h1 className='text-2xl max-xl:text-lg font-sans text-white border-l-2 rounded-2xl p-1 max-sm:text-sm'>DreamSpace.</h1>
        <div className='flex justify-between text-sm items-center gap-10 max-xl:gap-4  max-sm:hidden'>
          <Link to="/" className='text-orange-100 hover:text-white border-x border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 shadow shadow-slate-200'>Home</Link>
          <Link to="/interiorproducts" className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Shop</Link>
          <p className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>About us</p>
          <p className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Services</p>
          <p className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Blog</p>
          <p className='text-orange-100 hover:text-white border-orange-300 rounded-xl p-1 px-2 hover:border-orange-500 hover:shadow hover:shadow-slate-200'>Contact</p>
          <FaUser title='Profile' className='size-4'/>
          <FaCartPlus title='Cart' className='size-4'/>
        </div>
        <div className='hidden max-sm:flex rounded-sm text-white'>
          <FaBars/>
        </div>
      </div>


    </>
  )
}

export default Navbar