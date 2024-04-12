import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Product from './components/Product';
import Containers from './components/Containers';
import Automation from './components/Automation';
import Image from './components/Image';
import Metric from './components/Metric';



function App() {
  return (
    
      <div className="App">
        <Navigation />  
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/container" element={<Containers />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/image" element={<Image />} />
          <Route path="/metric" element={<Metric />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} /> 
        </Routes>
      </div>
    
  );
}

export default App;
