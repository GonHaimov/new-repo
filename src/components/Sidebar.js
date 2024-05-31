import React from 'react';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar-button">
        <img src="/path/to/home-icon.png" alt="Home" className="icon" />
        Home
      </button>
      <button className="sidebar-button">
        <img src="/path/to/shorts-icon.png" alt="Shorts" className="icon" />
        Shorts
      </button>
      <button className="sidebar-button">
        <img src="/path/to/subscriptions-icon.png" alt="Subscriptions" className="icon" />
        Subscriptions
      </button>
      <hr />
      <button className="sidebar-button">
        <img src="/path/to/playlists-icon.png" alt="Playlists" className="icon" />
        Playlists
      </button>
      <button className="sidebar-button">
        <img src="/path/to/your-videos-icon.png" alt="Your Videos" className="icon" />
        Your videos
      </button>
      <button className="sidebar-button">
        <img src="/path/to/watch-later-icon.png" alt="Watch Later" className="icon" />
        Watch later
      </button>
      <button className="sidebar-button">
        <img src="/path/to/liked-videos-icon.png" alt="Liked Videos" className="icon" />
        Liked videos
      </button>
      <hr />
      <div className="sidebar-section">
        <h2>Explore</h2>
        <button className="sidebar-button">
          <img src="/path/to/trending-icon.png" alt="Trending" className="icon" />
          Trending
        </button>
        <button className="sidebar-button">
          <img src="/path/to/music-icon.png" alt="Music" className="icon" />
          Music
        </button>
        <button className="sidebar-button">
          <img src="/path/to/gaming-icon.png" alt="Gaming" className="icon" />
          Gaming
        </button>
        <button className="sidebar-button">
          <img src="/path/to/news-icon.png" alt="News" className="icon" />
          News
        </button>
        <button className="sidebar-button">
          <img src="/path/to/sports-icon.png" alt="Sports" className="icon" />
          Sports
        </button>
        <button className="sidebar-button">
          <img src="/path/to/podcasts-icon.png" alt="Podcasts" className="icon" />
          Podcasts
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
