// Navigation.jsx
// Navigation bar with theme toggle, responsive menu, and section links.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '../../styles/components/navigation.module.css';

function Navigation() {
  // State for scroll effect, mobile menu, and screen size
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Handle scroll and resize for nav bar effects and mobile detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 1180);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Section links for navigation
  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'education', label: 'Education' },
    { to: 'projects', label: 'Projects' },
    { to: 'skills', label: 'Skills' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`${styles.navigation} ${isScrolled ? styles.navigationScrolled : ''}`}>
      <div className="container">
        <div className={styles.navigationContent}>
          {/* Logo scrolls to hero section */}
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className={styles.logo}
            aria-label="Home"
            tabIndex={0}
          >
            Portfolio
          </Link>

          {/* Section links, responsive for mobile */}
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  activeClass="active"
                  spy={true}
                  offset={-68}
                  className={styles.navLinksA}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle and hamburger menu (mobile) */}
          <div className={`${styles.navActions}${isMobile ? ' ' + styles.navActionsMobile : ''}`}>
            <button
              className={`${styles.themeToggleBtn} ${styles.roundToggle ? styles.roundToggle : ''} ${theme}`}
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              tabIndex={0}
            >
              <span className={styles.toggleSlider ? styles.toggleSlider : undefined}>
                <span className={`${styles.toggleIcon} ${styles.sun ? styles.sun : ''} ${theme === 'light' ? styles.toggleIconShow : ''}`}><FaSun /></span>
                <span className={`${styles.toggleIcon} ${styles.moon ? styles.moon : ''} ${theme === 'dark' ? styles.toggleIconShow : ''}`}><FaMoon /></span>
              </span>
            </button>
            {isMobile && (
              <button 
                className={styles.menuToggle}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className={styles.menuIcon}></span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 