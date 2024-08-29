import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../index.css"; 
import logo from '../assets/Logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"> {/* Link to the home page */}
          <img src={logo} alt="VJ Logo" style={{ height: '50px' }} />
        </Link>
      </div>

      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link> {/* Link to the About page */}
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link> {/* Link to the Portfolio page */}
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link> {/* Link to the Contact page */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;