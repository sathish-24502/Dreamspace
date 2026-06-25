import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const Counter = () => {

    const [count , Setcount] = useState(1) ;
   

   const handleIncrement =() => {
         Setcount(count+1)
    }

      const handleDecrement = () =>{
       if(count > 1){
           Setcount(count-1)
       }
        
      }

  return (
    <div className='flex gap-10 items-center'>
           <span className='border p-1'>
             <FaPlus onClick={handleIncrement}/>
           </span>
           <span>
            <p>{count}</p>
           </span>
           <span className='border p-1'>
            <FaMinus onClick={handleDecrement}/>
           </span>
    </div>
  )
}

export default Counter