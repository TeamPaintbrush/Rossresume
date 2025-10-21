import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaHome, FaBriefcase, FaPencilAlt, FaEnvelope } from 'react-icons/fa';
import DownloadResume from '../Resume/DownloadResume';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Leroy Ross</h2>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  <FaHome /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
                  <FaBriefcase /> <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                  <FaPencilAlt /> <span>Designs</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                  <FaEnvelope /> <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <div className="header-resume-btn">
              <DownloadResume variant="outline" showDropdown={true} />
            </div>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li>
                <Link to="/" onClick={toggleMobileMenu}>
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={toggleMobileMenu}>
                  <FaBriefcase /> Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={toggleMobileMenu}>
                  <FaPencilAlt /> Designs
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMobileMenu}>
                  <FaEnvelope /> Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
