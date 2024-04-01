import React from 'react';
import '../style/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const execCMD = () => {
    // Make a request to the server-side endpoint
    fetch('/rundocker')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
        alert('Command executed successfully');
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to execute command');
      });
  };

  return (
    <div>
      <div className="content">
        <div className="title">
          <div id="s-title">
            <p>Docker</p>
          </div>
        </div>

        <div className='subtitle'>
          <p>Docker is a platform designed to help developers build, share, and run container applications. We handle the tedious setup, so you can focus on the code.</p>
        </div>

        <button onClick={execCMD}>Get Started</button>
        {/* <Link to="/container">Get Started</Link> */}
      </div>
    </div>
  );
}
