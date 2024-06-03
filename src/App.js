import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ButtonBar from './components/ButtonBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content-container">
          <Sidebar />
          <div className="content-container">
            <ButtonBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
