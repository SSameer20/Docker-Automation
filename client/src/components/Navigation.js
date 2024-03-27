import React from 'react';
import {Link} from 'react-router-dom';
import '../style/navigation.css';

export default function Navigation() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/product">product</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li>
        <Link to="/about">about us</Link>
      </li>
    </ul>
  </nav>
  )
}
