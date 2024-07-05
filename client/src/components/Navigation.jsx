import React from 'react'
import {Link} from 'react-router-dom';
import "../style/navigation.css"

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/images">IMAGES</Link></li>
            <li><Link to="/container">CONTAINERS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
        </ul>
    </nav>
  )
}
