import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display :"flex", justifyContent:"center", flexDirection:"column",alignItems: "center" }}>
      <h1 style={{ textAlign: 'center' }}>About Me</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Hi, I'm Sameer Shaik. Welcome to Docker Automation Project! Here are some of my profiles where you can find more about my work and professional journey.
      </p>
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ marginBottom: '10px' }}>Connect with me:</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ marginBottom: '10px', backgroundColor : "white", padding:"10px"}}>
            <a href="https://github.com/SSameer20" target="_blank" rel="noopener noreferrer" style={{ color: '#0366d6', textDecoration: 'none' }}>
              GitHub: https://github.com/SSameer20
            </a>
          </li>
          <li style={{ marginBottom: '10px', backgroundColor : "white", padding:"10px" }}>
            <a href="https://www.linkedin.com/in/20-sameershaik/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none' }}>
              LinkedIn: https://www.linkedin.com/in/20-sameershaik/
            </a>
          </li>
          <li style={{ marginBottom: '10px',backgroundColor : "white", padding:"10px" }}>
            <a href="https://leetcode.com/u/Sameer_20/" target="_blank" rel="noopener noreferrer" style={{ color: '#f89f1b', textDecoration: 'none' }}>
              LeetCode: https://leetcode.com/u/Sameer_20/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
