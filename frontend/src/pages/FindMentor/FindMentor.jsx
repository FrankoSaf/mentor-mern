import React, { useState, useEffect, useRef } from 'react';
import findStyles from '../../UI/FindMentor/FindMentor.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import MentorLists from './MentorLists';
const FindMentor = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [orgArr, setOrgArr] = useState([
    { name: 'javascript', checked: false },
    { name: 'python', checked: false },
    { name: 'ruby on rails', checked: false },
    { name: 'c++', checked: false },
    { name: 'java', checked: false },
  ]);
  const [experience, setExperience] = useState([
    { name: 'Beginner', checked: false },
    { name: 'Intermediate', checked: false },
    { name: 'Advanced', checked: false },
    { name: 'Expert', checked: false },
  ]);
  const [filterLanguages, setFilterLanguages] = useState([]);
  const [filterLevel, setFilterLevel] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState(orgArr);
  const checkTechLang = (name, arr, setArr) => {
    const newArr = arr.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );
    setArr(newArr);
  };
  useEffect(() => {
    setFilterLanguages(
      orgArr.reduce(
        (acc, item) => (item.checked === true ? [...acc, item.name] : acc),
        []
      )
    );
    setProgrammingLanguages(orgArr);
    setFilterLevel(
      experience.reduce(
        (acc, item) => (item.checked === true ? [...acc, item.name] : acc),
        []
      )
    );
  }, [orgArr, experience]);
  const onMinChange = (e) => {
    e.target.value = Math.round(parseInt(e.target.value));
    e.target.value = Number(e.target.value);
    if (e.target.value > 0 && e.target.value < parseInt(max)) {
      setMin(Number(e.target.value));
    } else if (e.target.value <= 0) {
      setMin(0);
    }
  };
  const onMaxChange = (e) => {
    e.target.value = Math.round(e.target.value);
    e.target.value = Number(e.target.value);
    if (e.target.value < 100 && e.target.value > Number(min)) {
      setMax(Number(e.target.value));
    } else if (e.target.value > 100) {
      setMax(100);
    }
  };
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
                        onClick={(e) =>
                          checkTechLang(item.name, orgArr, setOrgArr)
                        }
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
                      style={{ cursor: 'pointer' }}
                      className={
                        item.checked === true ? `${findStyles.checked}` : ''
                      }
                      onClick={(e) =>
                        checkTechLang(item.name, experience, setExperience)
                      }
                    >
                      {item.name}
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
                <TextField
                  onChange={onMinChange}
                  min={min}
                  max='99'
                  value={min}
                  id='outlined-number'
                  type='number'
                />
                <TextField
                  //   min={minPriceRef.current.value}
                  onChange={onMaxChange}
                  min={min + 1}
                  max={max}
                  value={max}
                  id='outlined-number'
                  type='number'
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <MentorLists
        filterLanguages={filterLanguages}
        filterLevel={filterLevel}
        min={min}
        max={max}
      />
    </section>
  );
};

export default FindMentor;
