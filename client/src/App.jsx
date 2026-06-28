import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import './App.css'

function App() {

  return (
    <div className="container">
      <h1>Student Record Management System</h1>
      <StudentForm />
      <SearchBar />
      <StudentList />
    </div>
  );
}

export default App;
