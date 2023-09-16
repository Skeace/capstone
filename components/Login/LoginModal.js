import React, { useState } from 'react';
import './LoginModal.css'; // Import the CSS file

function LoginModal({ closeLoginModal }) {
  const [isLoginVisible, setLoginVisible] = useState(true);
  const [isSignUpVisible, setSignUpVisible] = useState(false);
  const [isResetPasswordVisible, setResetPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [userType, setUserType] = useState(''); // Student or Professor

  
  const showLogin = () => {
    setLoginVisible(true);
    setSignUpVisible(false);
    setResetPasswordVisible(false);
  };

  const showSignUp = () => {
    setLoginVisible(false);
    setSignUpVisible(true);
    setResetPasswordVisible(false);
  };

  const showResetPassword = () => {
    setLoginVisible(false);
    setSignUpVisible(false);
    setResetPasswordVisible(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle the login logic here with the form values (email, password)
    // You can close the modal after successful login by calling closeLoginModal()
    closeLoginModal();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle the signup logic here with the form values (email, firstName, lastName, password, reenterPassword, userType)
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle the reset password logic here with the email value
  };

  return (
    <body>
    <div className={`login-modal ${isLoginVisible ? 'login-visible' : ''}`}>
      <span className="close" onClick={closeLoginModal}>
        &times;
      </span>
      <h2>{isSignUpVisible ? 'Sign Up' : isResetPasswordVisible ? 'Reset Password' : 'Login'}</h2>
      {isLoginVisible && !isSignUpVisible && (
        <form onSubmit={handleLogin}>

        <div class = "input_container">
        <p>Email</p>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class = "input_container">
        <p>Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      )}
      {isSignUpVisible && (
        <form onSubmit={handleSignUp}>
          <div className="signup-form">
            <div className="left">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="right">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Re-enter Password"
                value={reenterPassword}
                onChange={(e) => setReenterPassword(e.target.value)}
              />
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="professor">Professor</option>
              </select>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
      {isResetPasswordVisible && (
        <form class = "form_forgotpass" onSubmit={handleResetPassword}>
          <input class = "reset-pass"
            type="email"
            placeholder="Enter the email address associated with your account"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="reset-password-button">Reset Password</button>
        </form>
      )}
      <div className="login-links">
        {!isResetPasswordVisible && (
          <p>
            <a href="#" onClick={showResetPassword}>
              Forgot Password? Reset Password
            </a>
          </p>
        )}
        {!isSignUpVisible && (
        <p>
          <a href="#" onClick={showSignUp}>
            Don't have an account? Sign up
          </a>
        </p>
        )}
        {!isLoginVisible && (
          <p>
          <a href="#" onClick={showLogin}>
            Already have an account? Login 
          </a>
        </p>
        )}
      </div>
    </div>
    </body>
  );
}

export default LoginModal;
