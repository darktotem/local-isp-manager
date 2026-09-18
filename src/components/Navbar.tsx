
//Global Navigation Bar with (logo, navigation links[Get Connected, about, contact], and user profile options [login, signup]

export function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#get-connected">Get Connected</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-profile">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}
