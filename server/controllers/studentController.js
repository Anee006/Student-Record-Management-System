const Student = require("../models/studentModel");

// GET /students
const getStudents = (req, res) => {

    Student.getAllStudents((err, results) => {
        if(err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

// GET /students/:id
const getStudentById = (req, res) => {
    
    const id = req.params.id;

    Student.getStudentById(id, (err, results) => {
        if(err) {
            return res.status(500).json(err);
        }

        if(results.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(results[0]);
    });
}

module.exports = {
    getStudents,
    getStudentById
};