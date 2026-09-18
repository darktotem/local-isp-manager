//Global Footer with contact information, social media links, and copyright notice
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <p>Contact us:</p>
        <p>Email: localnetwork@gmail.com</p>
      </div>
      <div className="footer-social">
        <p>Follow us:</p>
        <a href="https://tiktok.com">TikTok</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2026 Local Network. All rights reserved.</p>
      </div>
    </footer>
  );
}