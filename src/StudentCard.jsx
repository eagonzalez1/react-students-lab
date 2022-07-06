import ScoreList from "./ScoreList";

const StudentCard = (props) => {
  return ( 
    <div className="student-card">
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>
      <ScoreList scores={props.student.scores} />
    </div>
  );
}

export default StudentCard;


