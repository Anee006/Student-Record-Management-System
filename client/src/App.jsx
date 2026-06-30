import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import API from "./services/api";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const [editingStudent, setEditingStudent] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async () => {

    try {
      const response = await API.get("/students");

      setStudents(response.data);
    }

    catch (err) {
      console.log(err);
    }
  };

  const deleteStudent = async (id) => {

    try {
      await API.delete(`/students/${id}`);

      fetchStudents();
    }

    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) =>

    student.name

    .toLowerCase()

    .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Student Record Management System</h1>

      <StudentForm
        fetchStudents={fetchStudents}
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
      />

      <div className="search-section">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        setEditingStudent={setEditingStudent}
      />

    </div>
  );
}

export default App;