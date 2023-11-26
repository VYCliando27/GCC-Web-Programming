import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import HomePage from './components/homePage';
import PlacesPage from './components/placesPage';
import TourPage from './components/tourPage';
import AboutPage from './components/aboutPage';
import "./style/style.css";

function App() {
  return (
    <Router>
      <div className='myBG'>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
