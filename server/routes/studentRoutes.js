const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/students", studentController.getStudents);

router.get("/students/:id", studentController.getStudentById);

router.post("/students", studentController.addStudent);

module.exports = router;