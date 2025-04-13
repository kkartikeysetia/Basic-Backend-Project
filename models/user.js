const mongoose = require("mongoose"); // We need mongoose to define schemas.

// This defines what a user must look like.
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // can't be empty : also u can keep one property uniuqe for email
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

// Turning the schema into a real model
const model = mongoose.model("Users", userSchema); // This creates a MongoDB collection called Users based on this schema

module.exports = model;
