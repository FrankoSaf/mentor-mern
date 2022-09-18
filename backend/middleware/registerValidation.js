const { check } = require('express-validator');
const Mentor = require('../models/mentorSchema');
const Student = require('../models/studentSchema');

const registerValidation = [
  check('firstName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('First name is required')
    .isLength({ min: 3, max: 20 })
    .withMessage('First name should be between 3 and 20 characters'),
  check('lastName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Last name is required')
    .isLength({ min: 3, max: 20 })
    .withMessage('Last name should be between 3 and 20 characters'),
  check('middleName')
    .optional()
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage('Middle name should be between 3 and 20 characters'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Email is required')
    .normalizeEmail({ gmail_remove_dots: false })
    .isEmail()
    .withMessage('Not valid email')
    .custom(async (val) => {
      const student = await Student.find({ email: val });
      const mentor = await Mentor.find({ email: val });
      if (mentor.length > 0 || student.length > 0) {
        throw new Error('Email already in use');
      }
    }),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Password should have minimum 6 characters'),
  check('age')
    .optional()
    .isInt({ min: 16, max: 88 })
    .withMessage('Age should be between 16 and 88'),
  check('about')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('About should not be empty'),
  check('role')
    .exists({ checkFalsy: true })
    .withMessage('Role should be selected')
    .custom((val) => {
      console.log(val);
      if (val !== 'mentor' && val !== 'student') {
        throw new Error('Please choose between student and mentor');
      }
      return true;
    }),
  check('price')
    .optional()
    .isInt({ min: 5, max: 100 })
    .withMessage('Price should be between 5 and 100'),
];

module.exports = { registerValidation };
