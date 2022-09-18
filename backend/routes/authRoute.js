const express = require('express');
const router = express.Router();
const {
  registrationController,
  loginController,
  verificationController,
} = require('../controllers/authController.js');
const { registerValidation } = require('../middleware/registerValidation');
const { loginValidation } = require('../middleware/loginValidation');
const { userValidation } = require('../middleware/userValidation');
router.post(
  '/registration',
  registerValidation,
  userValidation,
  registrationController
);
router.post('/login', loginValidation, userValidation, loginController);
router.get('/verify/:id', verificationController);

module.exports = router;
