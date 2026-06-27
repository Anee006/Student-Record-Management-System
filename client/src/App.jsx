import './App.css'
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  return (
    <div className="container">
      <h1>Student Record Management System</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}

export default App;
