import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Products from '../components/Products'
import Service from '../components/Service'
import Facilities from '../components/Facilities'
import ShowCase from '../components/ShowCase'
// import Testimonals from '../components/Testimonals'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import SubscribeLetter from '../components/SubcribeLetter'
import FooterEnd from '../components/FooterEnd'

const WebPage = () => {
  return (
    <>
       <Navbar/> 
       <Home/>
       <Products/>
       <Service/>
      <Facilities/>
      <ShowCase/>
      <Blogs/>
      <SubscribeLetter/>
      <Footer/>
      <FooterEnd/>

    </>
  )
}

export default WebPage