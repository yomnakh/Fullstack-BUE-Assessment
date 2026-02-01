import logo from './logo.svg';
import './App.css';
import React from 'react';
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import EditUserPage from './pages/EditUserPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/create" element={<EditUserPage />} />
          <Route path="/edit/:id" element={<EditUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
