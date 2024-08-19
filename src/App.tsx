import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/HomePage/home-page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowPage from './pages/ShowPage/show-page';
import LoginPage from './pages/LoginPage/login-page';
import ContactPage from './pages/ContactPage/contact-page';
import ShowPageVote from './pages/ShowPageVote/show-page-vote';
import { LoadingPageComponent } from './components/LoadingPageComponent/loading-page-component';

function App() {
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingVisible(false);
    }, 2500);

    // Clean up the timer if the component is unmounted before the timer completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loadingVisible && <LoadingPageComponent />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowPage />} />
          <Route path="/shows/selecao" element={<ShowPageVote />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
