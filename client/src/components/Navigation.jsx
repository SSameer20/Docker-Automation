import React from 'react'
import {Link} from 'react-router-dom';
import "../style/navigation.css"

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/images">IMAGES</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            {/* <li><Link to="/"></Link></li> */}
        </ul>
    </nav>
  )
}
