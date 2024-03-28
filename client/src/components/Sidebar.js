import React from 'react';
import '../style/side.css'
import {Link} from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { TbBrandMiniprogram } from "react-icons/tb";
import { GoContainer } from "react-icons/go";
import { MdImageAspectRatio } from "react-icons/md";

export default function Sidebar() {
  

  return (
    <div className="sidebar">
      <IoClose />
      <div className="product">
      <ul>
      <li>
        <Link to="/task" style={{textDecoration:"none"}}><TbBrandMiniprogram style={{border:"none"}}/></Link>
      </li>
      <li>
        <Link to="/container"> <GoContainer /></Link>
      </li>
      <li>
        <Link to="/image"><MdImageAspectRatio /></Link>
      </li>
    </ul>

      </div>

      
    </div>
  );
}