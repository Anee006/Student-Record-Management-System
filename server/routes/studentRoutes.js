const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/students", studentController.getStudents);

router.get("/students/:id", studentController.getStudentById);

router.post("/students", studentController.addStudent);

router.put("/students/:id", studentController.updateStudent);

module.exports = router;