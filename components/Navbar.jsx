import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';
import logo from '../assets/Logo.svg';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const links = document.querySelectorAll('.navbar-nav a');

    if (links.length > 0) {
      links.forEach(link => {
        const randomDelay = Math.random() * 2;
        link.style.animationDelay = `${randomDelay}s`;
      });
    } else {
      console.warn("No links found in .navbar-nav. Check your CSS or component structure.");
    }
  }, [navItems]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);


  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="VJ Logo" style={{ height: '50px' }} />
        </Link>
      </div>

      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={closeMenu}>{item.label}</Link> 
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;