import StudentCard from "./StudentCard";

const StudentList = (props) => {
  return ( 
    <>
      {props.students.map(student =>
        <StudentCard
          key={student.name}
          student={student}
        />
      )}
    </>
  );
}

export default StudentList;