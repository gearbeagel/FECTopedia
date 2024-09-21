import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Article from './components/Article';
import Navbar from './components/Navbar';
import HomePage from './components/Home'; 
import AboutPage from './components/About'; 
import MapSection from './components/MapSection';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/info" element={<Article />} /> 
          <Route path="/map" element={<MapSection />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
