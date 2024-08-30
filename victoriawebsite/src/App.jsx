import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};



import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <button className="logo-button"><img src="/favicon-32x32.png" alt="Logo" width="30" height="30"/>
          </button>
        </Link> 
      </div>
      <div className="navbar-center">
        <ul className="nav-items">
          <li>
            <Link to="/home">
              <button className="nav-button">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <button className="nav-button">About</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="nav-button">Portfolio</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="nav-button">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/resume">
          <button className="resume-link">
          <a href="experienced-web-dev-pdf.pdf" target="_blank" rel="noopener noreferrer">my resume</a>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;




export default App;
