import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Technology from './sections/Technology';
import Products from './sections/Products';
import Market from './sections/Market';
import WhyUs from './sections/WhyUs';
import Reliability from './sections/Reliability';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Technology />
      <Products />
      <Market />
      <WhyUs />
      <Reliability />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
