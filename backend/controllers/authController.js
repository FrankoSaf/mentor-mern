const Mentor = require('../models/mentorSchema');
const Student = require('../models/studentSchema');
const bcrypt = require('bcrypt');
const { emailSender } = require('../models/Email');

const registrationController = async (req, res) => {
  const user = req.body;

  try {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = await bcrypt.hash(req.body.password, salt);
    if (user.role === 'student') {
      const data = new Student(user);
      // data.password = hash;
      await data.save();
      emailSender(data.email, data._id);
      res.send('Welcome student');
    } else if (user.role === 'mentor') {
      const data = new Mentor(user);
      // data.password = hash;
      await data.save();
      emailSender(data.email, data._id);
      res.send('Welcome mentor');
    }
  } catch (err) {
    return res.status(300).send('Invalid data');
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user =
    (await Mentor.findOne({ email: email })) ||
    (await Student.findOne({ email: email }));
  // if (user === null || bcrypt.compareSync(password, user.password) === false) {
  //   return res.status(300).send('Invalid email or password');
  // }
  const loggedUser =
    (await Mentor.findOne({ email: email }, '-password')) ||
    (await Student.findOne({ email: email }, '-password'));
  req.session.user = loggedUser;
  res.json(user);
};

const verificationController = async (req, res) => {
  const id = req.params.id;

  try {
    const user =
      (await Mentor.findByIdAndUpdate(id, { userVerification: true })) ||
      (await Student.findByIdAndUpdate(id, { userVerification: true }));
    if (user) {
      return res.send('You are verified!');
    }
  } catch (err) {
    res.send('verification failed');
  }
};

module.exports = {
  registrationController,
  loginController,
  verificationController,
};
