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


// POST /students (Add a student)
const addStudent = (student, callback) => {

    const sql = `
        INSERT INTO students
        (name, age, department, semester, email)
        VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, 
        [
            student.name,
            student.age,
            student.department,
            student.semester,
            student.email
        ],
        callback
    );
};


// PUT /students/:id (Update a student)
const updateStudent = (id, student, callback) => {
    const sql = `
        UPDATE students
        SET
            name=?,
            age=?,
            department=?,
            semester=?,
            email=?
        WHERE student_id=?`;

        db.query(sql, 
            [
                student.name,
                student.age,
                student.department,
                student.semester,
                student.email,
                id
            ],
            callback
        );
};


// DELETE /students/:id (Delete a student)
const deleteStudent = (id, callback) => {
    const sql = "DELETE FROM students WHERE student_id=?";

    db.query(sql, [id], callback);
};


module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};