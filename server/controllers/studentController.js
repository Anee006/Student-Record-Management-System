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


// POST /students
const addStudent = (req, res) => {

    Student.addStudent(req.body, (err, result) => {
        if(err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Student added successfully",
            id: result.insertId
        });
    });
};


// PUT /students/:id
const updateStudent = (req, res) => {

    const id = req.params.id;

    Student.updateStudent(id, req.body, (err, result) => {
        if(err) {
            return res.status(500).json(err);
        }

        // if someone tries to update a student that doesn't exist
        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student updated successfully"
        });
    });
};


// DELETE /students/:id
const deleteStudent = (req, res) => {

    const id = req.params.id;

    Student.deleteStudent(id, (err, result) => {
        if(err) {
            return res.status(500).json(err);
        }

        // to check if the student exists
        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully"
        });
    });
};


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};