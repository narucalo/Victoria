// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <VideoPlayer />
              <HeroSection />
            </>
          }
        />
        
        {/* About Page */}
        <Route
          path="/about"
          element={
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">
                <About />
              </main>
              <Footer /> {/* Footer included */}
            </div>
          }
        />
        
        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">
                <Contact />
              </main>
              <Footer /> {/* Footer included */}
            </div>
          }
        />

        {/* Portfolio Page */}
        <Route
          path="/portfolio"
          element={
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">
                <Portfolio />
              </main>
              <Footer /> {/* Footer included */}  
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
