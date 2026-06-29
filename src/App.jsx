import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebPage from './pages/WebPage'
import Product from './pages/Product';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WebPage/>}/>
      <Route path='/interiorproducts' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact-form' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
