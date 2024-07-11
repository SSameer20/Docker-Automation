import React, { useState } from 'react'
import "../style/auth.css"


export default function Authentication() {
  return (
    <div className='auth'>
      <div className="auth-form">
        <input type="email" name="user-email" id="auth-email"  placeholder='email'/>
        <input type="password" name="user-password" id="auth-password"  placeholder='password'/>
        <button id='login-btn' onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}
