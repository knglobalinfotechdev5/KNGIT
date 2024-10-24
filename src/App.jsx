import React, { useState, useEffect } from 'react';
import { NavbarDemo } from './Components/Common/Nav';
import { BackgroundBoxes } from './Pages/Home/Bg_hero';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from './Pages/About/About';
import WhatsAppButton from './Whatsapp';
import KNGas from './Pages/Projucts/KNGas';
import KNStore from './Pages/Projucts/KNStore';
import KNTrans from './Pages/Projucts/KNTrans';
import KNWeb from './Pages/Projucts/KNWeb';
import Preloader from './Components/Common/Preloader copy';
import Footer from './Components/Common/Footer';


const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const preloaderShown = sessionStorage.getItem('preloaderShown');
    
    if (!preloaderShown) {
      setLoading(true);  // Show preloader
    } else {
      setLoading(false); // Skip preloader if already shown
    }
  }, []);

  const handleVideoEnd = () => {
    setLoading(false); // Set loading to false once video ends
    sessionStorage.setItem('preloaderShown', 'true'); // Store preloader status in session
  };

  return (
    <>
      {loading ? (
        // Show preloader until video ends
        <Preloader onVideoEnd={handleVideoEnd} />
      ) : (
        <>
          <NavbarDemo />
          <Routes>
            <Route path="/" element={<BackgroundBoxes />} />
            <Route path="/about" element={<About />} />
            <Route path="/kngd" element={<KNGas />} />
            <Route path="/knsms" element={<KNStore />} />
            <Route path="/kntran" element={<KNTrans />} />
            <Route path="/knweb" element={<KNWeb />} />
          </Routes>
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
