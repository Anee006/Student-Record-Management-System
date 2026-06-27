const Student = require("../models/studentModel");

const getStudents = (req, res) => {
    Student.getAllStudents((err, results) => {
        if(err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

module.exports = {
    getStudents
};