import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const Login = () => {
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
    <main>
      <h1>Login</h1>
      {errors && Array.isArray(errors) ? (
        <ul>
          {errors.map((error, index) => {
            return <li key={index}>{error.msg}</li>;
          })}
        </ul>
      ) : (
        <p>{errors}</p>
      )}
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={onChangeHandler}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={onChangeHandler}
        />
        <input type='submit' value='Submit' />
      </form>
    </main>
  );
};

export default Login;
