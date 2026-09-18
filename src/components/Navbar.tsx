
//Global Navigation Bar with (logo, navigation links[Get Connected, about, contact], and user profile options [login, signup]
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">

        {/* Brand / Logo Placeholder */}
        <div className="nav-brand">
          <a href="/" onClick={closeMenu}>
            <span className="brand-logo-icon">⚡</span>
            <span className="brand-name">Local Network</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links & CTA */}
        <div className={`nav-content ${isMenuOpen ? 'is-active' : ''}`}>
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#packages" onClick={closeMenu}>
                Packages
              </a>
            </li>
            <li>
              <a href="#coverage" onClick={closeMenu}>
                Coverage
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          {/* Static CTA Button */}
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
