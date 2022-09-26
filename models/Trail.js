const mongoose = require("mongoose");

const TrailSchema = new mongoose.Schema({
  NavigationPreloadManager: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  elevation: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  map: {
    type: String,
    required: true,
  },
  pets: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  alert: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Trail", TrailSchema);
