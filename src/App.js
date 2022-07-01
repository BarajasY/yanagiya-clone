import React from 'react';
import { Navbar, MainLogo, ShippingAdvice, OurMeat, CutsSection, MeatMarbling, Footer, BarnLogo, JapanMeat, ProcessQualityCare, Store, NewYork, RibEye, Sirloin, RecipesIndex, Recipe01, PersonalBanner } from './Components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Navbar /> <MainLogo /> <ShippingAdvice /> <OurMeat /> <CutsSection /> <MeatMarbling /> <Footer /> <PersonalBanner /> </>} />
          <Route path="/nuestra-carne" element={<><Navbar /> <BarnLogo /> <JapanMeat /> <ProcessQualityCare /> <Footer /> <PersonalBanner /> </>} />
          <Route path="/tienda" element={<> <Navbar /> <Store /> <Footer /> <PersonalBanner /> </>} />
          <Route path="/newyork" element={<> <Navbar /> <NewYork /> <Footer /> <PersonalBanner /> </>} />
          <Route path="/ribeye" element={<> <Navbar /> <RibEye /> <Footer /> <PersonalBanner /> </>} />
          <Route path="/sirloin" element={<> <Navbar /> <Sirloin /> <Footer /> <PersonalBanner /> </>} />
          <Route path="/recipes" element={<> <Navbar /> <RecipesIndex /> <Footer /> <PersonalBanner /> </>} />
          <Route path="/recipes/01" element={<> <Navbar />  <Recipe01 /> <Footer /> <PersonalBanner /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
