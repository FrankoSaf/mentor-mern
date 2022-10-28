import React from 'react';
import profileStyles from '../../UI/Profile.module.css';
const languages = ['javascript', 'react', 'nodejs', 'html', 'css'];
const Sidebar = ({ user }) => {
  console.log(user);
  return (
    <div className={profileStyles.sidebar}>
      <div>
        <div className={profileStyles['img-container']}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/02/Bernardo_Strozzi_-_Claudio_Monteverdi_%28c.1630%29.jpg'
            alt='avatar'
          />
        </div>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <h2>
          {user?.location || 'Zadar'}, {user?.country || 'Croatia'}
        </h2>
        <h4>{user.age}</h4>
      </div>
      <div className={profileStyles.about}>
        <h3>About me:</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          inventore sit nihil dolor architecto assumenda consequatur corporis
          magni voluptate mollitia. Voluptas porro rem dolorum maxime similique
          eveniet blanditiis, ab quis harum! Tempore eum sed ducimus dolor in
          corporis accusamus ipsam.
        </p>
      </div>
      <div className='profileStyles.languages'>
        <h4>
          {user.role === 'student'
            ? 'Languages that I want to learn:'
            : 'Languages that I will teach you:'}
        </h4>
        <ul className={profileStyles['languages-list']}>
          {user.languages
            ? user.languages.map((language) => {
                return <li>{language}</li>;
              })
            : languages.map((language) => <li>{language}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
