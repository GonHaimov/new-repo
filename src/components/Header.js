import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaMicrophone, FaBell, FaPlusSquare } from 'react-icons/fa';
import { ReactComponent as YouTubeLogo } from '../assets/youtube-logo.svg'; // ייבוא ה-SVG כרכיב React

const Header = () => {
  return (
    <div className="header-container">
      <YouTubeLogo className="youtube-logo" alt="YouTube Logo" />
      <form className="form-inline search-form">
        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn search-button" type="submit">
          <FaSearch />
        </button>
        <button className="btn mic-button" type="button">
          <FaMicrophone />
        </button>
      </form>
      <div className="right-icons">
        <button className="btn upload-button" type="button">
          <FaPlusSquare />
        </button>
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
