import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Team />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;