import { useState } from "react";
import API from "../services/api";

function StudentForm({ fetchStudents }) {

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
            await API.post("/students", formData);

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

    return (
        <div>
            <h2>Add Student</h2>

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

                <button type="submit">Add Student</button>

            </form>
        </div>
    );
}

export default StudentForm;
