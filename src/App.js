import React from 'react';
import { Navbar, MainLogo, ShippingAdvice, OurMeat, CutsSection, MeatMarbling, Footer, BarnLogo, JapanMeat, ProcessQualityCare } from './Components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Navbar /> <MainLogo /> <ShippingAdvice /> <OurMeat /> <CutsSection /> <MeatMarbling /> <Footer /> </>} />
          <Route path="/nuestra-carne" element={<><Navbar /> <BarnLogo /> <JapanMeat /> <ProcessQualityCare /> <Footer /> </>} />
          <Route path="/tienda" element={<> <Navbar /> <Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;