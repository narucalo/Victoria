import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoPlayer from './components/VideoPlayer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css'; // Import Tailwind CSS

const App = () => {
  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black">
          <Navbar />
          <div className="flex-grow relative">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/video" element={<VideoPlayer />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
};

export default App;