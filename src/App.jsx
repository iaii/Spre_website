import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import HardwareSpotlight from './components/sections/HardwareSpotlight';
import Ecosystem from './components/sections/Ecosystem';
import ShopperExperience from './components/sections/ShopperExperience';
import AcceleratedCheckout from './components/sections/AcceleratedCheckout';
import RetailMedia from './components/sections/RetailMedia';
import Analytics from './components/sections/Analytics';
import Implementation from './components/sections/Implementation';
import CallToAction from './components/sections/CallToAction';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main>
        <Hero />
        <HardwareSpotlight />
        <Ecosystem />
        <ShopperExperience />
        <AcceleratedCheckout />
        <RetailMedia />
        <Analytics />
        <Implementation />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
