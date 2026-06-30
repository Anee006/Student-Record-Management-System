function StudentRow({ student, deleteStudent, setEditingStudent }) {
    return (
        <tr>
            <td>{student.student_id}</td>

            <td>{student.name}</td>

            <td>{student.age}</td>

            <td>{student.department}</td>

            <td>{student.semester}</td>

            <td>{student.email}</td>

            <td>
                <button onClick={() => setEditingStudent(student)}>Edit</button>

                <button onClick={ () => deleteStudent(student.student_id) }>Delete</button>
            </td>
        </tr>
    );
}

export default StudentRow;