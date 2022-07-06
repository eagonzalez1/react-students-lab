import './App.css';
import { useState } from 'react';
import { studentList } from './data';
import StudentList from './StudentList';
import ScoreList from './ScoreList'

function App() {
  const [students, setStudents] = useState(studentList)

  return (
    <div className='app-container'>
      <StudentList students={students} />
    </div>
  );
}

export default App;
