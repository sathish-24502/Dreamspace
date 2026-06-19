import { useState } from 'react'
import logo from '../src/assets/Logo.jpg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebPage from './pages/WebPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WebPage/>}/>
     
    </Routes>
    </BrowserRouter>
  )
}

export default App
