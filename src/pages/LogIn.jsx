import React from 'react'
import "@styles/LogIn.scss";
import { useState } from 'react'
import { Link } from "react-router-dom";

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
  const passwordPattern= /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}/;
  return passwordPattern.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    
    if (!validateEmail(email)) {
      setEmailError('Invalid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one symbol.');
      return;
    }

  };

  return (
    <div className='card-container'>
<div className='log-in-container'>
      <h1 className='welcome'>Welcome Back!</h1>
      <p>Log in to continue.</p>
      <form onSubmit={handleLogin} noValidate>
        <div >
          <label htmlFor="email" >Email: </label>
          <input
          placeholder='Type your email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className='error-message'>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
          placeholder='Type your password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className='error-message'>{passwordError}</p>}
        </div>
        <button type="submit" className='loginbutton'>Log In</button>
      </form>
      <p> Don't have an account?{' '}
        <button> <Link to="/get-started">Sign Up</Link></button>
      </p>
    </div>
    </div>
  
  );
};


export default LogIn