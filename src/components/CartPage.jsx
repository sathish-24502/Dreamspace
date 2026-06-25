import React from 'react'
import bag from '../assets/bag.svg'

const CartPage = () => {
  return (
    <>
        <div className='grid w-screen gap-4 font-poppins py-10 px-10 pl-24 fixed bg-orange-400'>
            <h1 className='text-3xl font-bold text-gray-700'>Shopping Cart</h1>
            <img src={bag} alt="bag icon" className='size-44'/>
        </div>
    </>
  )
}

export default CartPage