const express = require("express");
const { Student } = require("../db/student");
const router = new express.Router();
const validator = require("validator");

// API for signup
router.post("/signup", async (req, res) => {
  const student = new Student(req.body);
  console.log(student);
  try {
    await user.save();
    res.status(201).send({ student });
  } catch (e) {
    res.status(e);
  }
});

// API for login
router.post("/login", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    if (!student) {
      res.send("Please enter valid creds");
    } else {
      const student = await Student.findOne({ Password: req.body.Password });
      if (!student) {
        res.send("Please enter valied creds");
      } else {
        console.log(student);
        res.send({ student });
      }
    }
  } catch (e) {
    res.status(400);
  }
});

// API for delete
router.delete("/delete", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    if (!student) {
      res.send("please enter a valid cred");
    } else {
      const student = Student.findOne({ Password: req.body.Password });
      if (!student) {
        res.send("Please enter valid cred");
      } else {
        await student.deleteOne();
        res.send("Student Deleted Successfully");
      }
    }
  } catch (e) {
    res.status(400);
  }
});

// API for update
router.patch("/update", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    if (!student) {
      res.send("Please enter valid Cred");
    } else {
      const student = Student.findOne({ Password: req.body.Password });
      if (!student) {
        res.send("Please enter valid cred");
      } else {
        await student.updateOne({ Phone: req.body.Phone });
        res.send("student details updated");
      }
    }
  } catch (e) {
    res.status(400);
  }
});

module.exports = router;
