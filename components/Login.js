import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import youtubeLogo from '../assets/youtube-logo.png'; // Ensure this path is correct
import '../App.css'; // Make sure to update CSS for new layout.

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
      // Save user session information
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      // Redirect to home page
      alert('Login successful!');
      navigate('/home');
    } else {
      setLoginError('Username or password is incorrect');
    }
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <img src={youtubeLogo} alt="YouTube Logo" className="logo" />
      </div>
      <div className="right-section">
        <div className="form-container">
          <h1>Sign In</h1>
          <form>
            <label className="input-label">
              <div className="input-wrapper">
                <i className="fa fa-user icon"></i>
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </label>
            <label className="input-label">
              <div className="input-wrapper">
                <i className="fa fa-lock icon"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>
            {loginError && <p className="error-message">{loginError}</p>}
            <button type="button" className="login-btn" onClick={handleLogin}>SIGN IN</button>
          </form>
          <p>Don't have an account? <a href="/register" onClick={() => navigate('/register')}>Sign Up Now</a></p>
          <p>Or</p>
          <p>Continue with social media</p>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social"><i className="fab fa-google"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
