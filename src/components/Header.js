import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as YouTubeLogo } from '../assets/youtube-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <YouTubeLogo className="youtube-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline mx-auto" onSubmit={handleSearchSubmit}>
            <input
              className="form-control mr-sm-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <button className="btn btn-outline-primary my-2 my-sm-0">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
