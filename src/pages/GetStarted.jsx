import React from 'react'
import "@styles/GetStarted.scss";
import { useState } from 'react';
import { Link } from "react-router-dom";

const GetStarted = () => {

  const [signUpForm, setSignUpForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm({
      ...signUpForm,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    const newErrors = {
      fullName: '',
      email: '',
      phoneNumber: '',
    };

    let isValid = true;

    if (!signUpForm.fullName) {
      newErrors.fullName = 'Full Name is required.';
      isValid = false;
    }

    if (!signUpForm.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!validateEmail(signUpForm.email)) {
      newErrors.email = 'Invalid email address.';
      isValid = false;
    }

    if (!signUpForm.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required.';
      isValid = false;
    }

    setErrors(newErrors);

  }

  return (
    <div className='main-conatiner'>
      <h1>Create New Account</h1>
      <p>Please provide your details</p>
      <form onSubmit={handleSignUp} noValidate>
        <div>
        <label htmlFor='fullName'>Full Name: </label>
          <input
          placeholder='Enter your name'
          type="text"
            id="fullName"
            name="fullName"
            value={signUpForm.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className='error-message'>{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email" >Email: </label>
          <input
          placeholder='Type your email'
            type="email"
            id="email"
            name="email"
            value={signUpForm.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className='error-message'>{errors.email}</p>}
          </div>
          <div>
          <label htmlFor='phoneNumber'>Phone Number: </label>
          <input
            placeholder='Enter your phone number'
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={signUpForm.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className='error-message'>{errors.phoneNumber}</p>}
        </div>
          <button type='submit' className='createAccount'>Create Account</button>
          </form>
        <p> 
          Already have an account? {' '}
          <button><Link to="/login">Log In</Link></button>
        </p>
    </div>
  )
}

export default GetStarted