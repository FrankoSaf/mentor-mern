import React from 'react';
import { mentors } from '../../assets/mentors';
import cardStyles from '../../UI/FindMentor/MentorLists.module.css';
const MentorLists = () => {
  console.log(mentors);
  return (
    <div className={cardStyles.display}>
      {mentors.map((mentor) => {
        return (
          <div className={cardStyles.card}>
            <div className={cardStyles['card_image']}>
              <img src={mentor.image} alt='' />
            </div>
            <div className={cardStyles['card_body']}>
              <div className='name'>
                <h3>{mentor.name}</h3>
                <h4>
                  {mentor.city}, {mentor.country}
                </h4>
                <h4>
                  {mentor.price}$ || {mentor.level}
                </h4>
              </div>
              <div className={cardStyles.card_list}>
                {mentor.tech.length > 0 && (
                  <ul>
                    {mentor.tech.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                )}
              </div>
            </div>
            <div className={cardStyles.card_footer}>
              <div>Message</div>
              <div>View Profile</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MentorLists;
