const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: [Schema.Types.ObjectId], refPath: 'model_type' },
  model_type: { type: String, enum: ['mentors, students'] },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
