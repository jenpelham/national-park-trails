const mongoose = require("mongoose");

const TrailSchema = new mongoose.Schema({
  trailId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    require: true,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Trail", TrailSchema);
