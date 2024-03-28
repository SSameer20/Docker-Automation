import React from 'react';
import '../style/home.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <div className="content">
                <div className="title">
                <div id="s-title"><p>Docker</p></div>  
                </div>

                <div className='subtitle'>
                    <p>Docker is a platform designed to help developers build, share, and run container applications. We handle the tedious setup, so you can focus on the code.
                    </p>
                </div>

                <button><Link to="/about">Get Started</Link></button>

            </div>



    </div>
  )
}
