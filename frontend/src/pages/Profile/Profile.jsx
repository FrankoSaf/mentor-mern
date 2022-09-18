import React, { useContext} from 'react';
import { UserContext } from '../../context/UserContext';
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <main>
      {user ? (
        <div>
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h4>{user.age}</h4>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </main>
  );
};

export default Profile;
