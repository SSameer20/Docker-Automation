import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="App">
        <Navigation />  
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/container" element={<Containers />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/image" element={<Image />} />
          <Route path="/metric" element={<Metric />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} /> {/* Replace Home with your actual home component */}
          {/* Add routes for update and create if needed, with corresponding components: */}
          {/* <Route path="/update" element={<UpdateUser />} /> */}
          {/* <Route path="/create" element={<CreateUser />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
