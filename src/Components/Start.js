import "../Components/Start.css";

const Start = (props) => {
  return (
    <div className="start">
      <h1>
        WELCOME <br></br> TO <br></br> PROGRMMING QUIZ
      </h1>
      <button className="startBtn" onClick={props.startQuiz}>
        {" "}
        Click here to Start
      </button>
      <p>Best of luck!</p>
    </div>
  );
};

export default Start;
