import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

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
