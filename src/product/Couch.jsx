import React from 'react'

import sofa1 from '../assets/Images/sofa1.jpg'
import sofa2 from '../assets/Images/sofa2.jpg'
import sofa3 from '../assets/Images/sofa3.jpg'
import sofaAD from '../assets/Images/sofa-adImage.jpg'
import sofaAd from '../assets/Images/sofa-adImge.jpg'
import { FaRupeeSign } from 'react-icons/fa'

const Couch = () => {

    const Sofa =[
        {
            image : sofa1 ,
            name :"Aspen Comfort Sofa",
            price :"11,200.00"
            
        },
         {
            image : sofa2 ,
            name :"Premium Relax Sofa",
            price :"14,500.00"
            
        },
         {
            image : sofa3 ,
            name :"Modern Haven Sofa",
            price :"15,800.00"
            
        },
        
        
    ]

    const SofaAD =[
         {
            imageAD : sofaAD ,
            title :"Family Comfort Sofa.",
            desc :"Designed for everyday living, this spacious and cozy sofa brings families together in comfort and style. Its soft cushions and modern design create the perfect space for relaxation, playtime, and memorable moments. Ideal for contemporary homes seeking both elegance and functionality.",
                   
        },
    ]
    console.log(Sofa);

  return (
    <>
    <span className='flex justify-center items-center max-sm:m-4'>
        <h1 className='text-3xl text-gray-700 font-bold mx-10 py-6 max-sm:text-xl max-sm:mx-0 max-sm:py-16'>PRODUCTS</h1>
    </span>
    <div className='px-10 py-4 font-poppins max-sm:px-2'>
        <span>
            <h1 className='text-4xl py-4 font-bold text-gray-700 max-sm:text-lg max-sm:-mt-24 max-xl:text-2xl'>Where Comfort Meets Family Living ...</h1>
        </span>
        {SofaAD.map((SofaAD , index ) => (
            <div className='flex justify-center items-center gap-10 max-sm:flex-col max-sm:gap-4'>
                <img key={index} src={SofaAD.imageAD} alt="sofaAdImage" className='w-1/3 h-1/3 rounded-3xl max-sm:w-96 max-sm:rounded-md'/>
                <span className='grid gap-6 max-sm:gap-2'>
                <h1 className='text-3xl font-semibold text-gray-600 max-sm:text-lg max-xl:text-2xl'>{SofaAD.title}</h1>
                <p className='w-3/4 text-lg max-sm:text-xs max-sm:w-5/6 max-xl:w-96'>{SofaAD.desc}</p>
                </span>
            </div>
        ))}
    </div>
        <span>
            <h1 className='text-2xl font-bold text-gray-800 mx-10 py-6 max-sm:text-lg max-sm:mx-5 max-sm:py-0'>Modern Couch :</h1>
        </span>
        <div className='font-poppins flex gap-20 py-10 items-center justify-center max-sm:flex-col max-xl:flex-col max-sm:gap-10 max-xl:gap-10'>
        
            {Sofa.map((Sofa , index) =>(
                <div className='grid gap-2'>
                     <img key={index} src={Sofa.image} alt="SofaImages" className='w-80 h-64 rounded-xl border border-orange-100 shadow-md max-sm:w-72'/>
                     <h1 className='font-semibold'>{Sofa.name}</h1>
                     <p className='flex items-center text-gray-700'><FaRupeeSign/>{Sofa.price}</p>
                     <button className='border w-80 p-1 cursor-pointer bg-green-500 focus:bg-green-700 hover:shadow-md focus:text-white rounded-md max-sm:w-72'>Buy Now</button>
                </div>
            ))}
        </div>
    </>
  )
}

export default Couch