import React, { useState, useEffect, useRef } from 'react';
import findStyles from '../../UI/FindMentor/FindMentor.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import MentorLists from './MentorLists';
const FindMentor = () => {
  const [orgArr, setOrgArr] = useState([
    { name: 'javascript', checked: false },
    { name: 'python', checked: false },
    { name: 'ruby on rails', checked: false },
    { name: 'c++', checked: false },
    { name: 'java', checked: false },
  ]);
  const [experience, setExperience] = useState([
    { lvl: 'Beginner', checked: false },
    { lvl: 'Intermediate', checked: false },
    { lvl: 'Advanced', checked: false },
    { lvl: 'Expert', checked: false },
  ]);

  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(999);
  const [programmingLanguages, setProgrammingLanguages] = useState(orgArr);
  const checkTechLang = (idx, arr, setArr) => {
    const newArr = arr.map((item, index) =>
      index === idx ? { ...item, checked: !item.checked } : item
    );
    setArr(newArr);
  };
  useEffect(() => {
    setProgrammingLanguages(orgArr);
  }, [orgArr]);
  return (
    <section className={findStyles.container}>
      <div className={findStyles.filter}>
        <h3>Filter mentors</h3>
        <div className=''>
          <div className='div'>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Programming Languages
              </AccordionSummary>
              <AccordionDetails>
                <input
                  type='text'
                  onChange={(e) => {
                    const newArr = orgArr.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    );

                    return setProgrammingLanguages(newArr);
                  }}
                />

                <ul className={findStyles.filters}>
                  {programmingLanguages.map((item, index) => {
                    return (
                      <li
                        onClick={(e) => checkTechLang(index, orgArr, setOrgArr)}
                        style={{ cursor: 'pointer' }}
                        className={
                          item.checked === true ? `${findStyles.checked}` : ''
                        }
                        key={index}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Competency level:
              </AccordionSummary>
              <AccordionDetails>
                <ul className={findStyles.filters}>
                  {experience.map((item, index) => (
                    <li
                      className={
                        item.checked === true ? `${findStyles.checked}` : ''
                      }
                      onClick={(e) =>
                        checkTechLang(index, experience, setExperience)
                      }
                    >
                      {item.lvl}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Price:
              </AccordionSummary>
              <AccordionDetails className={findStyles.price}>
                <input
                  max={parseInt(maxPriceRef.current.min) + 1}
                  min='0'
                  ref={minPriceRef}
                  id='outlined-number'
                  label='From'
                  type='number'
                />
                <TextField
                  //   min={minPriceRef.current.value}
                  ref={maxPriceRef}
                  id='outlined-number'
                  label='To'
                  type='number'
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <MentorLists />
    </section>
  );
};

export default FindMentor;
