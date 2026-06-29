import React from 'react'
import Navbar from '../components/Navbar'
import {about , WhyUs} from '../datas/Abouts'
import Adimge from '../assets/Images/AD-Image.jpg'
import dots from '../assets/dots-yellow.svg'

const About = () => {

    

  return (
    <>
    <Navbar/>
    <span className='flex bg-orange-400'>
        <h1 className='text-4xl font-bold font-sora p-24'>About</h1>
    </span>
        <div className='p-10'>
            {about.map((item , indx)=>(
              <div key={indx} className='grid gap-4 font-poppins mr-8 mt-12' >
               <span className='flex items-center justify-around w-1/2'>
                 <th className=' w-96'>Project </th>
                 <h1 className='w-96 text-gray-600'>{item.name}</h1>
               </span>
               <span className='flex items-center justify-around w-1/2'>
                <th className=' w-96'>Founder & Developer</th>
                 <p className=' w-96 text-gray-600'>{item.founder}</p>
               </span>
               <span className='flex items-center justify-around w-1/2'>
                <th className='w-96'>Email</th>
                  <p className=' w-96 text-gray-600'>{item.email}</p>
               </span>
               <span className='flex items-center justify-around w-1/2'>
                <th className=' w-96'>Phone</th>
                  <p className=' w-96 text-gray-600'>{item.phone}</p>
               </span>
               <span className='flex items-center justify-around w-1/2'>
                <th className=' w-96'>Since</th>
                   <p className=' w-96 text-gray-600'>{item.since}</p>
               </span>
                <span className='flex items-center justify-around w-1/2'>
                <th className=' w-96'>Works</th>
                   <p className=' w-96 text-gray-600'>{item.works}</p>
               </span>
                <span className='flex justify-around w-1/2'>
                <th  className=' w-96'>Summery</th>
                    <p className='w-96 text-gray-600'>{item.desc}</p>
               </span>
               
               <div className='flex justify-end items-center p-8 gap-20 mr-12'>
                
                <span className='relative'>
                    <img src={dots} alt="dots.svg"/>
                </span>
                <span className='absolute mr-96 mt-32'>
                  <img src={Adimge} alt="AdImage" className='w-96 h-96 rounded-2xl shadow-sm shadow-orange-400'/>
                </span>
                
                 <ul className='list-disc grid gap-4 text-lg'>
                  <h1 className='text-3xl font-semibold text-gray-600 mb-4'>What We Offer ;</h1>
                 <li className='text-orange-900 font-semibold'>{item.sofa}</li>
                 <li className='text-orange-900 font-semibold'>{item.beds}</li>
                 <li className='text-orange-900 font-semibold'>{item.furniture}</li>
                </ul>
               </div>
              </div>

            ))}
        </div>

        <div className='mt-44 mb-10'>
          <span className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-3xl font-semibold text-gray-600 mb-4'>Why Choose Us</h1>
            <p className='w-3/4 text-gray-700'>At DreamS..., we combine quality craftsmanship, modern design, and affordable pricing to create furniture that transforms your house into a home. With reliable service and customer-first support, we're committed to making every shopping experience comfortable and enjoyable.</p>
          </span>
          {WhyUs.map((item, index) => (
           
  <ul key={index} className='grid grid-cols-4 text-orange-600 font-semibold gap-2 p-4 justify-center items-center'>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point1}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point2}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point3}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point4}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point5}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point6}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point7}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point8}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point9}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point10}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point11}</li>
    <li className='flex justify-center shadow-sm shadow-orange-200 p-2 rounded-2xl'>{item.point12}</li>
  </ul>
))}
        </div>
    </>
  )
}

export default About