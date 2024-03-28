import React from 'react';
import {Link} from 'react-router-dom';
import '../style/navigation.css';
import { IoBarChart } from "react-icons/io5";
import { FaHome, FaNetworkWired } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/container">CONTAINERS </Link>
      </li>
      <li>
        <Link to="/automation">AUTOMATION</Link>
      </li>
      <li>
        <Link to="/image">IMAGES</Link>
      </li>
      <li>
        <Link to="/metric">METRICS</Link>
      </li>
      {/* <li>
        <Link to="/container">CONTAINERS </Link>
      </li> */}
      {/* <li>
        <Link to="/contact">CONTACT</Link>
      </li> */}
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
    </ul>
  </nav>
  )
}
