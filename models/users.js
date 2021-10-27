const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
});

module.exports = {
  model: mongoose.model("users", schema),
  schema,
};
