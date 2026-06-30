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

    const [errors, setErrors] = useState({});

    const [message, setMessage] = useState("");

    const [messageType, setMessageType] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,

            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    const validateForm = () => {

        let newErrors = {};

        if(formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        if(formData.age <= 0) {
            newErrors.age = "Age must be greater than 0";
        }

        if(formData.semester < 1 || formData.semester > 8) {
            newErrors.semester = "Semester must be between 1 and 8";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(!validateForm()) {
            return;
        }

        try {

            if (editingStudent) {

                await API.put(
                    `/students/${editingStudent.student_id}`,
                    formData
                );

                setEditingStudent(null);

                setMessage("Student updated successfully!");
            }

            else {
                await API.post("/students", formData);

                setMessage("Student added successfully!");
            }

            setMessageType("success");

            fetchStudents();

            setFormData({
                name: "",
                age: "",
                department: "",
                semester: "",
                email: ""
            });

            setErrors({});
        }

        catch (err) {

            setMessage(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );

            setMessageType("error");
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

            {message && (
                <div className={messageType === "success" ? "success-message" : "error-message"}>
                    {message}
                </div> 
            )}

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                {errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                />

                {errors.age && (
                    <p className="error">{errors.age}</p>
                )}

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

                {errors.semester && (
                    <p className="error">{errors.semester}</p>
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {errors.email && (
                    <p className="error">{errors.email}</p>
                )}

                <button type="submit">
                    {editingStudent ? "Update Student" : "Add Student"}
                </button>

                {editingStudent && (
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => {

                            setEditingStudent(null);

                            setFormData({
                                name: "",
                                age: "",
                                department: "",
                                semester: "",
                                email: ""
                            });

                            setErrors({});
                        }}
                    >
                        Cancel
                    </button>
                )}
                
            </form>
        </div>
    );
}

export default StudentForm;
