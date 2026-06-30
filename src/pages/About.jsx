import React from 'react'
import Navbar from '../components/Navbar'
import {about , WhyUs} from '../datas/Abouts'
import Adimge from '../assets/Images/AD-Image.jpg'
import dots from '../assets/dots-yellow.svg'
import FooterEnd from '../components/FooterEnd'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Service from '../components/Service'


const About = () => {

    

  return (
    <>
    <Navbar/>
    <span className='flex flex-col font-poppins p-16 gap-2 bg-orange-400'>
        <h1 className='text-4xl font-bold font-sora'>About Us</h1>
        <p className='w-1/2'>DreamS... is your trusted destination for premium furniture that blends comfort, style, and quality. Our mission is to help you create a home you'll love.</p>
        <Link to="/interiorproducts" className='mt-6 cursor-pointer font-semibold w-32 flex justify-center items-center p-1 rounded-lg hover:shadow-white bg-orange-800 text-white shadow-sm'>Shop Now</Link>

    </span>
        <span className='font-poppins '>
          <h1 className='text-3xl font-bold text-gray-700 p-6'>Our Team</h1>
        </span>
        <div className='grid grid-cols-3 justify-center items-center p-4 mt-4 mb-6 gap-6 font-poppins'>
          {about.map((about , indx) => (
            <div key={indx} className='grid justify-center items-center gap-2'>
              <img src={about.image} alt="Person Picture" className='w-72 h-96 rounded-xl shadow-sm shadow-orange-300'/>
              <h1 className='font-bold text-xl'>{about.name}</h1>
              <h2 className='font-bold text-gray-700'>{about.title}</h2>
              <p className='text-gray-600 w-72'>{about.desc}</p>
              <p className='underline text-gray-600 cursor-pointer'>{about.btn}</p>
            </div>
          ))}
        </div>
            <Service/>


        <div className='mt-10 mb-10 grid gap-2'>
          <span className='flex flex-col justify-center items-center gap-2'>
            {/* <h1 className='text-3xl font-semibold text-gray-600 mb-4'>Why Choose Us</h1> */}
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
          <Footer/>
        <FooterEnd/>
    </>
  )
}

export default About