//Global Footer with contact information, social media links, and copyright notice
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div>
          <div className="navbar-brand">
            <div className="logo-badge">⚡</div>
            <span className="brand-name">Local Network</span>
          </div>
          <p className="footer-brand-desc">
            High-speed, reliable home fibre internet for everyone.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#packages">Internet Packages</a></li>
            <li><a href="#coverage">Coverage Map</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Phone: +254 700 000 000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Local Network. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;