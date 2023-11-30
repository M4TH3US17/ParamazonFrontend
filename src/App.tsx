import React from 'react';
import './App.css';
import Home from './pages/HomePage/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowPageVoting from './pages/ShowPage/ShowPageVote/show-page-vote';
import ShowPage from './pages/ShowPage/show-page';
import LoginPage from './pages/LoginPage/login';
import ContactPage from './pages/ContactPage/contact';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows" element={<ShowPage />} />
      <Route path="/shows/selecao" element={<ShowPageVoting />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contato" element={<ContactPage />} />
    </Routes>
  </Router>
  );
}

export default App;
