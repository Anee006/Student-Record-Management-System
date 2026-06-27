const db = require("../config/db");

// GET /students (Get all students)
const getAllStudents = (callback) => {
    const sql = "SELECT * FROM students";
    
    db.query(sql, callback);
};

// GET /students/:id (Get a single student)
const getStudentById = (id, callback) => {
    const sql = "SELECT * FROM students WHERE student_id = ?";

    db.query(sql, [id], callback);
};

module.exports = {
    getAllStudents,
    getStudentById
};
