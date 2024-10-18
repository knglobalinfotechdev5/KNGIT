import React from 'react'
// import Hero from './Components/Home/Hero'
import { NavbarDemo } from './Components/Common/Nav'
// import { QuoteBtn } from './Components/Home/Quoteform'
import Footer from './Components/Common/Footer'
import { BackgroundBoxes } from './Pages/Home/Bg_hero'
import { Route, Routes } from 'react-router-dom'
import { About } from './Pages/About/About'

const App = () => {
  return (
    <>
    <NavbarDemo/>
    <Routes>
      <Route path="/" element={<BackgroundBoxes />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App