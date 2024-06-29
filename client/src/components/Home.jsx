import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../style/home.css"
import dockerImage from "../media/docker.png"

export default function Home() {

  const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText + text[index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [index, displayedText, text, speed]);
  
    return <span id="main-title">{displayedText}</span>;
  };

  return (
    <section>
      <div className="main-head">
        <img src={dockerImage} alt="" srcset="" id="main-image"/>
      <TypingEffect text="Docker Automation" speed={50} />
        
      </div>

    </section>
  )
}
