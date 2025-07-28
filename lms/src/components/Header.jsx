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
          <a href="/" className="nav-link">Home</a>
          <a href="/books" className="nav-link">Books</a>
          <a href="/members" className="nav-link">Members</a>
          <a href="/loans" className="nav-link">Loans</a>
          <a href="/about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
