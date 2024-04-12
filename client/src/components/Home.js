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

//  const getDetails = (){
//   console.log("button is working")
//     useEffect(() => {
//       fetch('/getdata')
//       .then((data) => {
//         return data.json()
//       })
//       .then((res) => {
//         console.log(res);
//         setData(res)

//       })
//     })
//  }
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

        <div className="information">
          <div className="table-head">
            <p>Container Id</p>
            <p>Process name</p>
          </div>

          <div className="table-data">
        
            {
              data.map((item)=>{
                return <div className="data">
                <p>{item["Container Id"]}</p>
                <p>{item["Process name"]}</p>
              </div>

              })
            } 

          </div>
        </div>
        {/* <Link to="/container">Get Started</Link> */}
      </div>
    </div>
  );
}
