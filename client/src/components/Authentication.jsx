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
    <div className='auth'>
      <div className="auth-form">
        <input type="email" name="user-email" id="auth-email"  placeholder='email'/>
        <input type="password" name="user-password" id="auth-password"  placeholder='password'/>
        <button id='login-btn'>
          Login
        </button>
      </div>
    </div>

  )
}
