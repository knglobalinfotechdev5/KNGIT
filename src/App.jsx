import React from 'react'
import { NavbarDemo } from './Components/Common/Nav'
import Footer from './Components/Common/Footer'
import { BackgroundBoxes } from './Pages/Home/Bg_hero'
import { Route, Routes } from 'react-router-dom'
import { About } from './Pages/About/About'
import { KNStore } from './Pages/Projucts/KNStore'
import { KNTrans } from './Pages/Projucts/KNTrans'
import WhatsAppButton from './Whatsapp'
import KNGas from './Pages/Projucts/KNGas'

const App = () => {
  return (
    <>
    <NavbarDemo/>
    <Routes>
      <Route path="/" element={<BackgroundBoxes />} />
      <Route path="/about" element={<About />} />
      <Route path='/kngd' element={<KNGas />} />
      <Route path='/knsms' element={<KNStore />} />
      <Route path='/kntran' element={<KNTrans />} />
      {/* <Route path='/knweb' element={<KNTrans />} /> */}
    </Routes>
    <WhatsAppButton/>
    <Footer/>
    </>
  )
}

export default App