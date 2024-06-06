import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h1>Welcome, {loggedInUser.username}!</h1>
      <button onClick={() => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
      }}>Logout</button>
    </div>
  );
}

export default Home;
