//Global Footer with contact information, social media links, and copyright notice

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Brand Info & Operational Hours */}
        <div className="footer-section brand-info">
          <div className="footer-logo">
            <span className="brand-logo-icon">⚡</span>
            <span className="brand-name">Local Network</span>
          </div>
          <p className="brand-tagline">
            High-speed, reliable home fibre internet for everyone. Stay connected with Local Network.
          </p>
          <div className="hours-block">
            <strong>Operational Hours:</strong>
            <p>Mon-Fri: 8:00 AM-6:00 PM</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#packages">Internet Packages</a></li>
            <li><a href="#coverage">Coverage Map</a></li>
            <li><a href="/login">Customer Portal</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <address className="contact-info">
            <p><strong>Phone:</strong> +254 700 000 000</p>
            <p><strong>Email:</strong> support@netconnect.co.ke</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
          </address>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Local Network. All rights reserved.</p>
      </div>
    </footer>
  );
};