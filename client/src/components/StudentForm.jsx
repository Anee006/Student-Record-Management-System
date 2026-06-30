import { useState, useEffect } from "react";
import API from "../services/api";

function StudentForm({ fetchStudents, editingStudent, setEditingStudent }) {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        department: "",
        semester: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editingStudent) {
                await API.put(
                    `/students/${editingStudent.student_id}`,

                    formData
                );

                setEditingStudent(null);
            }

            else {
                await API.post("/students", formData);
            }

            fetchStudents();

            setFormData({
                name: "",
                age: "",
                department: "",
                semester: "",
                email: ""
            });
        }

        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        if (editingStudent) {
            setFormData({
                name: editingStudent.name,
                age: editingStudent.age,
                department: editingStudent.department,
                semester: editingStudent.semester,
                email: editingStudent.email
            });
        }

    }, [editingStudent]);

    return (
        <div>
            <h2>{editingStudent ? "Update Student" : "Add Student"}</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="semester"
                    placeholder="Semester"
                    value={formData.semester}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <button type="submit">
                    {editingStudent ? "Update Student" : "Add Student"}
                </button>

            </form>
        </div>
    );
}

export default StudentForm;
