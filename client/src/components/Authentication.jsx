import React, { useState } from 'react'
import "../style/auth.css"

export default function Authentication() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) =>{
        e.preventDefault();
        console.log(email, password);
    }
    
  return (
    <>
    <div className="auth">
        <p >Login in to Docker</p>
        <input type="email" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={login}>Login</button>
    </div>
    </>
  )
}
