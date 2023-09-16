import React, { useState } from 'react';
import Navbar from './components/Navbar/NavBar';
import LoginModal from './components/Login/LoginModal'; // Import your LoginModal component
import './App.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <Navbar openLoginModal={openLoginModal} />
      {isLoginModalOpen && (
        <div className={`modal-overlay`}>
          {/* Pass closeLoginModal function to the LoginModal component */}
          <LoginModal closeLoginModal={closeLoginModal} />
        </div>
      )}
    </div>
  );
}

export default App;
