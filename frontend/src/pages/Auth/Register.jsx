import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
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
    <main>
      {errors && (
        <ul>
          {errors.map((error) => (
            <li>{error.msg}</li>
          ))}
        </ul>
      )}
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor='first-name'>First Name:</label>
          <input
            type='text'
            name='firstName'
            id='first-name'
            required
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            id='last-name'
            required
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            required
            onChange={onChangeHandler}
          />
        </div>
        {/* <div>
          <label htmlFor='confirm-passwords'>Confirm Password:</label>
          <input type='password' name='confirmPassword' id='confirm-password' />
        </div> */}
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            required
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='role'>Are you student or mentor?</label>
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
        <div>
          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            name='age'
            id='age'
           
            max='88'
            onChange={onChangeHandler}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </main>
  );
};

export default Register;
