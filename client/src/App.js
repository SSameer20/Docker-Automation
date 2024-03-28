import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Product from './components/Product';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />  
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
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
