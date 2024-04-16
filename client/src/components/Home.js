import React, { useEffect, useState } from 'react';
import '../style/home.css';
// import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);
  const getDetails = () => {
    console.log("Working")

    fetch('/getdata')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Handle the fetched data as needed
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      // Handle the error appropriately
    });

  }

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

        <button onClick={getDetails}>Get Started</button>

        {/* <Link to="/container">Get Started</Link> */}
      </div>
    </div>
  );
}
