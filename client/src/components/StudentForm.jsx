function StudentForm() {
    return (
        <div>
            <h2>Add Student</h2>

            <form>
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Age" />
                <input type="text" placeholder="Department" />
                <input type="number" placeholder="Semester" />
                <input type="email" placeholder="Email" />

                <button>Add Student</button>
            </form>
        </div>
    );
}

export default StudentForm;
