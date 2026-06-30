import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import API from "./services/api";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {

    try {
      const response = await API.get("/students");

      setStudents(response.data);
    }

    catch(err) {
      console.log(err);
    }
  };

  const deleteStudent = async (id) => {

    try {
      await API.delete(`/students/${id}`);

      fetchStudents();
    }

    catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">

      <h1>Student Record Management System</h1>

      <StudentForm 
          fetchStudents={fetchStudents}
          editingStudent={editingStudent}
          setEditingStudent={setEditingStudent}
      />

      <SearchBar />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        setEditingStudent={setEditingStudent}
      />

    </div>
  );
}

export default App;