import React from 'react'

const FooterEnd = () => {
  return (
    <>
        <div className=" flex justify-between max-sm:gap-2 items-center m-6 p-4 max-sm:text-xs max-sm:p-0 max-sm:m-0 max-sm:w-screen max-sm:flex-col">
        <span>
            <h1 className='max-sm:w-screen max-sm:p-2'>
          Copyright ©2026. All Rights Reserved.— Designed with love by
          Untree.co Distributed By
        </h1>
        <h2 className='max-sm:pl-2'>ThemeWagon</h2>
        </span>
        <span className='max-sm:flex max-sm:gap-12 max-sm:mb-2'>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </span>
      </div>
    </>
  )
}

export default FooterEnd