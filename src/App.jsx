import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Publication from './pages/Publication';
import Research from './pages/Research';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route  path="/" element={<Home />} />
        <Route  path="/publication" element={<Publication />} />

        <Route path="/achievements" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
  
    </Routes>
  </BrowserRouter>
  )
}

export default App
