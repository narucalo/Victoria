import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <Navbar />

      {/* Placeholder content for other sections */}
      <div id="home">Home Section</div>
      <div id="about">About Section</div>
      <div id="portfolio">Portfolio Section</div>
      <div id="contact">Contact Section</div>
    </div>
  );
}

export default App;