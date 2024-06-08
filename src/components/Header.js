import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaMicrophone, FaBell, FaPlus } from 'react-icons/fa';
import { ReactComponent as YouTubeLogoLight } from '../assets/youtube-logo-light.svg';
import YouTubeLogoDark from '../assets/youtube-logo-dark.jpeg';
import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage theme mode
  const navigate = useNavigate(); // Use navigate hook
  const dropdownRef = useRef(null); // Ref for the dropdown

  useEffect(() => {
    const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(searches.slice(0, 10)); // Limit to the last 10 searches
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);
      const newRecentSearches = [query, ...recentSearches.filter((search) => search !== query)].slice(0, 10);
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
      setQuery('');
    }
    setShowDropdown(false);
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the home page
    onSearch(''); // Reset search state
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  };

  return (
    <div className="header-container">
      <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        {isDarkMode ? (
          <img src={YouTubeLogoDark} alt="YouTube Logo Dark" className="youtube-logo-dark" />
        ) : (
          <YouTubeLogoLight className="youtube-logo-light" />
        )}
      </div>
      <form className="form-inline search-form" onSubmit={handleSearch}>
        <input
          className="form-control search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button className="btn search-button" type="submit">
          <FaSearch />
        </button>
        <button className="btn mic-button" type="button">
          <FaMicrophone />
        </button>
        {showDropdown && (
          <div className="recent-searches-dropdown" ref={dropdownRef}>
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="dropdown-item"
                onMouseDown={() => {
                  setQuery(search);
                  onSearch(search);
                  setShowDropdown(false);
                }}
              >
                {search}
              </button>
            ))}
          </div>
        )}
      </form>
      <div className="right-icons">
        <button className="btn upload-button" type="button">
          <FaPlus />
        </button>
        <DarkModeToggle onToggle={handleToggleDarkMode} />
        <button className="btn notification-button" type="button">
          <FaBell />
        </button>
        <button className="btn btn-outline-primary sign-in-button" type="button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
