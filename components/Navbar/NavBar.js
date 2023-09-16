import React from 'react';
import './NavBar.css'; // Import your CSS file for Navbar styling

function Navbar({ openLoginModal }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="website-name">Your Website Name</h1>
      </div>
      <div className="navbar-right">
        <button className="login-button" onClick={openLoginModal}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
