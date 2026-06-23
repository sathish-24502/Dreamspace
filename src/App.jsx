import { useState } from 'react'
import logo from '../src/assets/Logo.jpg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebPage from './pages/WebPage'
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WebPage/>}/>
      <Route path='/interiorproducts' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
