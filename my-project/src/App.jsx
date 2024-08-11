import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/Login";
import Onebox from "./Pages/OneBox";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/onebox" element={<Onebox />} />
        <Route path="/register" element={<div>Registration Page (TBD)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
