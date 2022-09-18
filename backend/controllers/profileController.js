const Mentor = require('../models/mentorSchema');
const Student = require('../models/studentSchema');

const showProfile = (req, res) => {
  const user = req.session.user;
  res.json(user);
};

module.exports = { showProfile };
