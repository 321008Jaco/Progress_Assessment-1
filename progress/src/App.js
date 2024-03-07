import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Charts from './Pages/Chart';
import Home from './Pages/Home';
import './App.css';


function App() {
  return (

    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/chart" element={<Charts />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;

