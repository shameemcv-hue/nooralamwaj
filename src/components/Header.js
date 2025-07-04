import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold d-flex align-items-center" href="#home">
          <img 
            src={logo} 
            alt="Noor Al Amwaj Logo" 
            className="me-2"
            style={{ width: '8  0px', height: '80px', objectFit: 'contain' }}
          />
          NOOR AL AMWAJ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#gallery">Fleet</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;