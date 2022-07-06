import './App.css';
import { useState } from 'react';
import { studentList } from './data';
import StudentList from './StudentList';

function App() {
  const [students] = useState(studentList)

  return (
    <div className='app-container'>
      <StudentList students={students} />
    </div>
  );
}

export default App;
