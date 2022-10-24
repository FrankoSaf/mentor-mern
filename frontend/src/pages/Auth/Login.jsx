import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import authStyles from '../../UI/Auth/Auth.module.css';
const Login = ({ changeAuthHandler }) => {
  const { setUser } = useContext(UserContext);
  const [loginUser, setLoginUser] = useState({});
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const values = e.target.value;
    setLoginUser((pre) => {
      return { ...pre, [e.target.name]: values };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('/auth/login', loginUser);
      setUser(data.data);
      navigate('/profile');
    } catch (e) {
      setErrors(e.response.data);
      console.log(errors);
    }
  };
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '40px',
          color: 'var(--colorSecondary)',
        }}
      >
        Login
      </h1>
      {errors && Array.isArray(errors) ? (
        <ul>
          {errors.map((error, index) => {
            return <li key={index}>{error.msg}</li>;
          })}
        </ul>
      ) : (
        <p>{errors}</p>
      )}
      <form onSubmit={onSubmitHandler} className={authStyles.form}>
        <div className={authStyles.inputCont}>
          <label htmlFor='email' className={authStyles.label}>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={onChangeHandler}
            className={authStyles.input}
          />
        </div>
        <div className={authStyles.inputCont}>
          <label htmlFor='password' className={authStyles.label}>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={onChangeHandler}
            className={authStyles.input}
          />
        </div>
        <input type='submit' value='Submit' className={authStyles.button} />
      </form>
      <p>
        Don't have an account?{' '}
        <span onClick={changeAuthHandler} className={authStyles.span}>
          Sign up
        </span>
      </p>
    </>
  );
};

export default Login;
