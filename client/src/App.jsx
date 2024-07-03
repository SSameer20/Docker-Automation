import React from 'react';
import "./style/app.css"
import Navigation from './components/Navigation';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Images from './components/Images';
import About from './components/About';
import Container from './components/Container';
import Authentication from './components/Authentication';


export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/images" element={<Images />} />
        <Route path="/container" element={<Container />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
