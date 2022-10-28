import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import navStyles from '../../UI/Navigation.module.css';
import axios from 'axios';
const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const [spread, setSpread] = useState(false);
  const navigate = useNavigate();
  const subNavHandler = () => {
    setSpread((pre) => !pre);
  };
  const logoutHandler = async () => {
    const data = await axios.post('/logout');
    setUser(null);
    if (data) navigate('/');
  };
  return (
    <nav>
      <div className={navStyles.nav_container}>
        <NavLink to='/' className={navStyles.logo}>
          <span>D</span>
          <span style={{ color: 'var(--colorPrimary)' }}>M</span>
        </NavLink>
        <div className={navStyles.links}>
          {user ? (
            <>
              <div className={navStyles.links_left}>
                <NavLink to='/mentors'>Find Mentor</NavLink>
                <NavLink to='/postings'>Postings</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
              </div>
              <div className={navStyles.links_right}>
                <img
                  src='https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
                  alt=''
                  style={{
                    height: '5rem',
                    width: '5rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                  onClick={subNavHandler}
                />
                {spread && (
                  <ul className={navStyles.sub_list}>
                    <NavLink to='/profile'>
                      {user.firstName} {user.lastName}
                    </NavLink>
                    <li>{user.role}</li>
                    <NavLink to='/settings'>Settings</NavLink>
                    <li onClick={logoutHandler}>Logout</li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/auth' className={navStyles.join}>
                Join
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
