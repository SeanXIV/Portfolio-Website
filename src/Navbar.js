import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-logo">
          <Link to="/"></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>
            Experience
          </Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
            Projects
          </Link>
          <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
            Skills
          </Link>
          <Link to="/contact" className="nav-link contact-btn">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`nav-links-mobile ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>
            Experience
          </Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
            Projects
          </Link>
          <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
            Skills
          </Link>
          <Link to="/contact" className="nav-link contact-btn">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}