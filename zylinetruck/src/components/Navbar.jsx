import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '/about') {
      setActiveLink('about');
    } else if (path === '/service') {
      setActiveLink('service');
    } else if (path === '/contact') {
      setActiveLink('contact');
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          navMenuRef.current && 
          !navMenuRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleNavigation = (path, linkName) => {
    navigate(path);
    setActiveLink(linkName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <nav className="zyline-navbar" aria-label="Main navigation">
        <div className="zyline-nav-container">
          <Link to="/about" className="zyline-logo" onClick={() => handleNavigation('/about', 'about')}>
            <img src={logo} alt="Zyline Logo" className="zyline-logo-img" />
            <span className="zyline-logo-text">Zyline Transportation Services</span>
          </Link>
          
          <button 
            ref={hamburgerRef}
            className={`zyline-hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu" 
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul 
            ref={navMenuRef}
            className={`zyline-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}
          >
            <li>
              <Link 
                to="/about"
                className={`zyline-nav-link ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => handleNavigation('/about', 'about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/service"
                className={`zyline-nav-link ${activeLink === 'service' ? 'active' : ''}`}
                onClick={() => handleNavigation('/service', 'service')}
              >
                Transportation Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={`zyline-nav-link zyline-contact-highlight ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavigation('/contact', 'contact')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="zyline-menu-overlay active" onClick={() => {
          setIsMobileMenuOpen(false);
          document.body.style.overflow = '';
        }}></div>
      )}
    </>
  );
};

export default Navbar;