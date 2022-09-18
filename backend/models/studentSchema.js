const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  middleName: {
    type: String,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'invalid email'],
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  age: {
    type: Number,
    min: 16,
    max: 88,
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'mentor'],
  },
  userVerification: {
    type: Boolean,
    default: false,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
