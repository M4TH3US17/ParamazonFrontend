import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from './pages/HomePage';
import { ShowPage } from './pages/ShowPage';
import { LoginPage } from './pages/LoginPage';
import { ContactPage } from './pages/ContactPage';

import { LoadingPageComponent } from './components/LoadingPageComponent';

import './App.css';

export const App: React.FC<{}> = ({}: {}): JSX.Element => {
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (<>
      {loadingVisible && <LoadingPageComponent />}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shows" element={<ShowPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Router>
    </>);
};