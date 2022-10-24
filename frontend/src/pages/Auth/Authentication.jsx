import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import authStyles from '../../UI/Auth/Auth.module.css';
const Authentication = () => {
  const [authSwitch, setAuthSwitch] = useState(false);
  const changeAuthHandler = () => setAuthSwitch((pre) => !pre);
  console.log(authSwitch);
  return (
    <section className={authStyles.section}>
      {!authSwitch ? (
        <Register changeAuthHandler={changeAuthHandler} />
      ) : (
        <Login changeAuthHandler={changeAuthHandler} />
      )}
    </section>
  );
};

export default Authentication;
