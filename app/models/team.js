// Team Model

var mongoose = require('mongoose');

var TeamSchema = mongoose.Schema({
  _id: Number,
  game: String,
  name: String,
  rank: Number,
  rating: Number,
  region: String,
  link: String,
  captain: String,
  roster: Array
});

module.exports = mongoose.model('Team', TeamSchema);
