import React from 'react';
import '../App.css'; 
import youtubeLogo from '../assets/youtube-logo.png'; 

function MainPage({ setPage }) {
  return (
    <div className="main-page">
      <div className="form-container">
        <img src={youtubeLogo} alt="YouTube Logo" className="logo" />
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <form>
          <label>
            Username
            <input type="text" placeholder="Enter username" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <button type="button" className="sign-in-btn" onClick={() => setPage('login')}>Sign In</button>
        </form>
        <span>or continue with</span>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-google"></i></a>
          <a href="#" className="social"><i className="fab fa-apple"></i></a>
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
        </div>
        <span>Not a member? <a href="#" onClick={() => setPage('register')}>Register now</a></span>
      </div>
    </div>
  );
}

export default MainPage;
