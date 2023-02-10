import React, { useState } from "react";
import { connect } from "react-redux";
import "./Dashboard.css";
import PollQuestion from "../Questions/PollQuestion";

const Dashboard = (props) => {
  const [questionType, setQuestionType] = useState("unanswered");

  const handleQuestionTypes = () => {
    let type = questionType === "unanswered" ? "answered" : "unanswered";
    setQuestionType(type);
  };

  return (
    <div>
      <div className="question-types">
        <span className="question-type-text">
          {questionType === "unanswered"
            ? "Unanswered Questions"
            : "Answered Questions"}
        </span>
        <button className="question-type-btn" onClick={handleQuestionTypes}>
          {questionType === "unanswered"
            ? "Show Answered Questions"
            : "Show Unanswered Questions"}
        </button>
      </div>
      <div>
        {props.questionsIds.map((id) => (
          <PollQuestion
            key={id}
            questionId={id}
            currentQuestionType={questionType}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionsIds: !questions
    ? []
    : Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      ),
});

export default connect(mapStateToProps)(Dashboard);
