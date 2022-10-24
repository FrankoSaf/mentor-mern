import React, { useState } from 'react';
import axios from 'axios';
import authStyles from '../../UI/Auth/Auth.module.css';
const Register = ({ changeAuthHandler }) => {
  const [newUser, setNewUser] = useState({ role: 'student' });
  const [errors, setErrors] = useState([]);
  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setNewUser((pre) => {
      return { ...pre, [e.target.name]: newValue };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('/auth/registration', newUser);
      console.log(data);
    } catch (e) {
      setErrors(e.response.data);
    }
  };

  return (
    <>
      {errors && (
        <ul>
          {errors.map((error) => (
            <li>{error.msg}</li>
          ))}
        </ul>
      )}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '40px',
          color: 'var(--colorSecondary)',
        }}
      >
        Register
      </h1>
      <form onSubmit={onSubmitHandler} className={authStyles.form}>
        <div className={authStyles.inputCont}>
          <label htmlFor='first-name' className={authStyles.label}>
            First Name:
          </label>
          <input
            type='text'
            name='firstName'
            id='first-name'
            required
            onChange={onChangeHandler}
            className={authStyles.input}
          />
        </div>
        <div className={authStyles.inputCont}>
          <label htmlFor='last-name' className={authStyles.label}>
            Last Name:
          </label>
          <input
            type='text'
            name='lastName'
            id='last-name'
            required
            onChange={onChangeHandler}
            className={authStyles.input}
          />
        </div>
        <div className={authStyles.inputCont}>
          <label htmlFor='password' className={authStyles.label}>
            Password:
          </label>
          <input
            type='password'
            name='password'
            id='password'
            required
            onChange={onChangeHandler}
            className={authStyles.input}
          />
        </div>
        {/* <div>
          <label htmlFor='confirm-passwords'>Confirm Password:</label>
          <input type='password' name='confirmPassword' id='confirm-password' />
        </div> */}
        <div className={authStyles.inputCont}>
          <label htmlFor='email' className={authStyles.label}>
            Email:
          </label>
          <input
            type='email'
            name='email'
            id='email'
            required
            onChange={onChangeHandler}
            className={authStyles.input}
          />
        </div>
        <div className={authStyles.inputCont}>
          <label htmlFor='role' className={authStyles.label}>
            Are you student or mentor?
          </label>
          <select
            name='role'
            id='role'
            onChange={onChangeHandler}
            defaultValue='s'
          >
            <option value='student'>Student</option>
            <option value='mentor'>Mentor</option>
          </select>
        </div>
        <div className={authStyles.inputCont}>
          <label htmlFor='age' className={authStyles.label}>
            Age:
          </label>
          <input
            type='number'
            name='age'
            id='age'
            min='14'
            max='88'
            onChange={onChangeHandler}
          />
        </div>
        <input type='submit' value='Submit' className={authStyles.button} />
      </form>
      <p>
        Have an account? Then{' '}
        <span onClick={changeAuthHandler} className={authStyles.span}>
          login
        </span>
      </p>
    </>
  );
};

export default Register;
