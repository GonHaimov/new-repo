import React, { useState } from 'react';
import './Auth.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src="/youtube-logo.png" alt="YouTube Logo" className="logo" />
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {/* Form will be added in future commits */}
        <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
}

export default Auth;
