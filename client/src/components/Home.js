import React from 'react';
import '../style/home.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <div className="content">
                <div className="title">
                <div id="s-title"><p>Hackverse</p></div>  
                </div>

                <div className='subtitle'>
                    <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
                </div>

                <button><Link to="/about">Get Started</Link></button>

            </div>



    </div>
  )
}
