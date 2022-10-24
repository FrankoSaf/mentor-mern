import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import navStyles from '../../UI/Navigation.module.css';
const Navigation = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <NavLink to='/' className={navStyles.logo}>
        <span>D</span>
        <span style={{ color: 'var(--colorPrimary)' }}>M</span>
      </NavLink>
      <div className={navStyles.links}>
        {user ? (
          <>
            <NavLink to='/mentors'>Find Mentor</NavLink>
            <NavLink to='/postings'>Postings</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <span>Logout</span>
          </>
        ) : (
          <>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/auth'>Join</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
