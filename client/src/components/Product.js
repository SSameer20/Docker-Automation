import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../style/product.css'; // Assuming your CSS file is named 'product.css'
import Sidebar from './Sidebar'; // Assuming your Sidebar component is located in './Sidebar'
import Containers from './Containers'; // Assuming your Containers component is located in './Containers'
import Automation from './Automation';
// import Error from './Error';


export default function Product() {
  return (
  
      <div className="product">
        <div className="prod-sidebar">
        <Sidebar />
        </div>
        
        <div className="prod-content">
          <Containers />
          {/* <Automation /> */}
          </div>

        </div>
         
  );
}
