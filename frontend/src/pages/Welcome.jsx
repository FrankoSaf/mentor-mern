import React from 'react';
import welcomeStyles from '../UI/Welcome.module.css';
const Welcome = () => {
  return (
    <div className={welcomeStyles.container}>
      <h1>Welcome to Mentor.com</h1>
      <h3>Do you want to spread or get knowledge?</h3>
      <h2>
        Then please <a href='/register'>register</a> or{' '}
        <a href='/login'>login</a>
      </h2>
    </div>
  );
};

export default Welcome;
