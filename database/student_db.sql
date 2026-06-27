CREATE DATABASE student_db;
USE student_db;

CREATE TABLE students (
	student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    department VARCHAR(100),
    semester INT,
    email VARCHAR(100)
);

INSERT INTO students 
(name,age,department,semester,email)
VALUES 
('Vanya', 20, 'CSE', 4, 'vanya@gmail.com'),
('Daksh', 21, 'IT', 6, 'daksh@gmail.com'),
('Ayushi', 19, 'ECE', 2, 'ayushi@gmail.com');

SELECT * FROM students;
