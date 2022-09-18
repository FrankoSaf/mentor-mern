const { check } = require('express-validator');

const loginValidation = [
  check('email').trim().not().isEmpty().withMessage('Email is required'),
  check('password').trim().not().isEmpty().withMessage('Password is required'),
];

module.exports = { loginValidation };
