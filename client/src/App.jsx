import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import API from "./services/api";
import "./App.css";

function App() {

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {

        try {
            const response = await API.get("/students");

            setStudents(response.data);
        }

        catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="container">

            <h1>Student Record Management System</h1>

            <StudentForm fetchStudents={fetchStudents} />

            <SearchBar />

            <StudentList students={students}/>

        </div>
    );
}

export default App;