import React from 'react'
import Chair from '../product/Chair'
import Navbar from '../components/Navbar'
import Couch from '../product/Couch.jsx'
import Bed from '../product/Bed.jsx'
import WoodFurni from '../product/WoodFurni.jsx'



const Product = () => {
  return (
    <>
        <Navbar/>
        <Couch/>
        <WoodFurni/>
        <Bed/>
        <Chair/>
        

        
    </>
  )
}

export default Product