const mongoose = require("mongoose");
const validator = require("validator");

// Schema creation for db

const studentSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
    trim: true,
  },
  Lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    index: { unique: true },
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please enter a valid email");
      }
    },
  },
  Password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "Password"');
      }
    },
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student: Student };
