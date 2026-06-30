import StudentRow from "./StudentRow";

function StudentList({ students }) {
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