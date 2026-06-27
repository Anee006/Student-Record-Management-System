function StudentRow({ student }) {
    return (
        <tr>
            <td>{student.student_id}</td>

            <td>{student.name}</td>

            <td>{student.age}</td>

            <td>{student.department}</td>

            <td>{student.semester}</td>

            <td>{student.email}</td>

            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    );
}

export default StudentRow;