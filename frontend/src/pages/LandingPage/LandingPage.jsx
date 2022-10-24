import React from 'react';
import landingStyles from '../../UI/LandingPages.module.css';
import landingImage from '../../assets/images/landing.png';
const LandingPage = () => {
  return (
    <div className={landingStyles['landing-container']}>
      <div className={landingStyles['landing_container-left']}>
        {/* <div className={landingStyles.blue}></div> */}
        <h1>
          <span style={{ color: '#f69937' }}>Dev</span>Mentor
        </h1>
        <h3 style={{ color: 'var(--colorPrimary)', fontSize: '3rem' }}>
          Learn about development from the best
        </h3>
      </div>
      <div className={landingStyles['landing_container-right']}>
        <img src={landingImage} alt='landing' />
      </div>
    </div>
  );
};

export default LandingPage;
