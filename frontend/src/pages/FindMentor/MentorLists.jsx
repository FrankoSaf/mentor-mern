import React, { useEffect, useState } from 'react';
import { mentors } from '../../assets/mentors';
import cardStyles from '../../UI/FindMentor/MentorLists.module.css';
const MentorLists = ({ filterLanguages, filterLevel, min, max }) => {
  const [mentorsList, setMentorsList] = useState(mentors);
  const [filteredMentorList, setFilteredMentorList] = useState(mentorsList);
  useEffect(() => {
    if (filterLanguages.length > 0 || filterLevel.length > 0) {
      setFilteredMentorList(
        mentorsList
          ?.filter((mentor) => {
            return mentor.tech.some((item) => filterLanguages.includes(item))
              ? filterLevel.length > 0
                ? filterLevel.includes(mentor.level)
                  ? true
                  : false
                : true
              : filterLevel.length > 0 && filterLanguages.length === 0
              ? filterLevel.includes(mentor.level)
                ? true
                : false
              : false;
          })
          .filter((item) => item.price >= min && item.price <= max)
      );
    } else {
      setFilteredMentorList(
        mentorsList.filter((item) => item.price >= min && max >= item.price)
      );
    }
  }, [filterLanguages, filterLevel, max, min]);
  console.log(max, min);
  return (
    <div className={cardStyles.display}>
      {filteredMentorList?.map((mentor) => {
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
