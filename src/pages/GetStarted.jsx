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
    ageCheck: '',
    citizenshipCheck: '',
    termsCheck: '',
  });

  const [checkboxes, setCheckboxes] = useState({
    ageCheck: false,
    citizenshipCheck: false,
    termsCheck: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setCheckboxes({
        ...checkboxes,
        [name]: checked,
      });
    } else {
      setSignUpForm({
        ...signUpForm,
        [name]: value,
      });
    }
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
      ageCheck: '',
      citizenshipCheck: '',
      termsCheck: '',
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

    if (!checkboxes.ageCheck) {
      newErrors.ageCheck = 'You must confirm that you are over 18.';
      isValid = false;
    }

    if (!checkboxes.citizenshipCheck) {
      newErrors.citizenshipCheck = 'You must confirm your citizenship status.';
      isValid = false;
    }

    if (!checkboxes.termsCheck) {
      newErrors.termsCheck = 'You must agree to the Terms & Conditions and Privacy Policy.';
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
          className='inputField'
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
          className='inputField'
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
          className='inputField'
            placeholder='Enter your phone number'
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={signUpForm.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className='error-message'>{errors.phoneNumber}</p>}
        </div>
        <div className="checkbox-container">
          <input
          className='checkboxInput'
            type="checkbox"
            name="ageCheck"
            checked={checkboxes.ageCheck}
            onChange={handleChange}
          />
          <label>
            I am over 18
          </label>
          {errors.ageCheck && <p className='error-message'>{errors.ageCheck}</p>}
        </div>
        <div className="checkbox-container">
          <input
          className='checkboxInput'
            type="checkbox"
            name="citizenshipCheck"
            checked={checkboxes.citizenshipCheck}
            onChange={handleChange}
          />
          <label>
            I am not a U.S. citizen, nor have any tax obligations in the U.S.
          </label>
          {errors.citizenshipCheck && <p className='error-message'>{errors.citizenshipCheck}</p>}
        </div>
        <div className="checkbox-container">
          <input
          className='checkboxInput'
            type="checkbox"
            name="termsCheck"
            checked={checkboxes.termsCheck}
            onChange={handleChange}
          />
          <label>
            By creating an account, I agree with Terms & Conditions and Privacy Policy.
          </label>
          {errors.termsCheck && <p className='error-message'>{errors.termsCheck}</p>}
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