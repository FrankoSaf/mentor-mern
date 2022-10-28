import React, { useContext } from 'react';
import Sidebar from '../../components/Profile/Sidebar';
import { UserContext } from '../../context/UserContext';
import profileStyles from '../../UI/Profile.module.css';
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <section className={profileStyles.container}>
      {user ? <Sidebar user={user} /> : <div>Loading</div>}
    </section>
  );
};

export default Profile;
