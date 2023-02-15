const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
  name: {type: String, maxlength: 255},
  description: {type: String, maxlength: 600},
  image: {type: String, maxlength: 2000},
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('course', course);