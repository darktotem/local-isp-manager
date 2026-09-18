
//Global Navigation Bar with (logo, navigation links[Get Connected, about, contact], and user profile options [login, signup]
import { useState } from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {   
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Brand / Logo */}
        <div className="nav-brand">
          <a href="/" onClick={closeMenu} className="brand-link">
            <span className="brand-name">Local Network</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger-toggle ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links & Action CTA */}
        <div className={`nav-content ${isMenuOpen ? 'is-active' : ''}`}>
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-item-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#packages" className="nav-item-link" onClick={closeMenu}>
                Packages
              </a>
            </li>
            <li>
              <a href="#coverage" className="nav-item-link" onClick={closeMenu}>
                Coverage
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item-link" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-cta-wrapper">
            <a href="#packages" className="btn-get-connected" onClick={closeMenu}>
              Get Connected
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
