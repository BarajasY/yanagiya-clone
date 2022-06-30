import React from 'react';
import { Navbar, MainLogo, ShippingAdvice, OurMeat, CutsSection, MeatMarbling, Footer, BarnLogo, JapanMeat, ProcessQualityCare, Store, NewYork, RibEye, Sirloin, RecipesIndex, Recipe01 } from './Components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Navbar /> <MainLogo /> <ShippingAdvice /> <OurMeat /> <CutsSection /> <MeatMarbling /> <Footer /> </>} />
          <Route path="/nuestra-carne" element={<><Navbar /> <BarnLogo /> <JapanMeat /> <ProcessQualityCare /> <Footer /> </>} />
          <Route path="/tienda" element={<> <Navbar /> <Store /> <Footer /></>} />
          <Route path="/newyork" element={<> <Navbar /> <NewYork /> <Footer /></>} />
          <Route path="/ribeye" element={<> <Navbar /> <RibEye /> <Footer /></>} />
          <Route path="/sirloin" element={<> <Navbar /> <Sirloin /> <Footer /></>} />
          <Route path="/recipes" element={<> <Navbar /> <RecipesIndex /> <Footer /> </>} />
          <Route path="/recipes/01" element={<> <Navbar />  <Recipe01 /> <Footer /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
