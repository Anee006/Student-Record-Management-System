import StudentRow from "./StudentRow";

function StudentList() {

    const students = [
        {
            student_id: 1,
            name: "Vanya",
            age: 20,
            department: "CSE",
            semester: 4,
            email: "vanya@gmail.com"
        },
        {
            student_id: 2,
            name: "Daksh",
            age: 21,
            department: "IT",
            semester: 6,
            email: "daksh@gmail.com"
        }
    ];

    return (
        <div>

            <h2>Student List</h2>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Semester</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <StudentRow
                            key={student.student_id}
                            student={student}
                        />
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default StudentList;