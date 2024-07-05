import React from 'react';
import sohail from "../media/sohail.jpeg"
import sameer from "../media/sameer.jpeg"
import Navigation from './Navigation';

export default function About() {
  return (
    <>
    <Navigation />
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display :"flex", justifyContent:"center", flexDirection:"column",alignItems: "center" }}>
      <h1 style={{ textAlign: 'center' }}>About Me</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' , maxWidth : "70vw"}}>
        Welcome to Docker Automation Project! The Docker Automation Project aims to leverage Docker's containerization technology to streamline our development and deployment processes. By automating specific tasks, such as building and deploying containerized applications or running tests within isolated environments, we aim to achieve greater efficiency, consistency, and reproducibility.
         This project will likely involve utilizing tools like Docker Compose for managing multi-container applications and potentially integrating with CI/CD pipelines for seamless automation.
      </p>
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ marginBottom: '10px' }}>Connect with our team</h3>
        <ul style={{ listStyleType: 'none', padding: '0', padding : '10px 5px', display : 'flex' }}>
          <li style={{ marginBottom: '10px', backgroundColor : "white", padding:"10px", display : 'flex', flexDirection : 'column'}}>
            <img src={sohail} alt="sohail" srcset="" style={{maxWidth : '100px'}}/>
            <p style={{color : 'black'}}>sohail</p>
            <a href="https://github.com/Sohail-9" target="_blank" rel="noopener noreferrer" style={{ color: '#0366d6', textDecoration: 'none' }}>
              GitHub
            </a>
          </li>
          <li style={{ marginBottom: '10px', backgroundColor : "white", padding:"10px" , display : 'flex', flexDirection : 'column'}}>
            <img src={sameer} alt="" srcset="" style={{maxWidth : '100px'}} />
            <p style={{color : 'black'}}>sameer</p>
            <a href="https://github.com/SSameer20" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none' }}>
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
</>
  );
}
