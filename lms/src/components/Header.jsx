import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          LibraryMS
        </a>
        
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Dashboard</a>
          <a href="/books" className="nav-link">Books</a>
          <a href="/users" className="nav-link">Users</a>
          <a href="/issues" className="nav-link">Issues & Returns</a>
          <a href="/reservations" className="nav-link">Reservations</a>
          <a href="/fines" className="nav-link">Fines</a>
          <a href="/profile" className="nav-link">Profile</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
