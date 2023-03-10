import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../../utils/helpers";
import "./PollQuestion.css";
import { useNavigate } from "react-router-dom";

const Question = (props) => {

    const navigate = useNavigate();
    const { name, avatar, timestamp, optionOne, optionTwo, hasReplied } =
    props.question;

    const navigateToQuestionPage = (e) =>{
      if(hasReplied){
        navigate(`questions/${props.questionId}/result`)
      }else{
        navigate(`questions/${props.questionId}`)
      }
    }

  return (
    <div className="question-details">
      {((props.currentQuestionType === "unanswered" && hasReplied) ||
      (props.currentQuestionType === "answered" && !hasReplied)) ?
      "" :
        <div className="question">
          <img
            src={avatar}
            alt={avatar === null ? "" : `Avatar of ${name}`}
            className="avatar"
          />
          <div className="question-info">
            <span className="user-name">{name} Asks, Would You Rather! </span>
            <div>{formatDate(timestamp)}</div>
            <p>{optionOne && optionOne.text}</p>
            <strong>OR</strong>
            <p>{optionOne && optionTwo.text}</p>
          </div>
          <button className="poll-btn" onClick={(e)=>navigateToQuestionPage(e)}>Poll</button>
        </div>
      }
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }, { questionId }) => {
  let question = questions[questionId];
  return {
    users,
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};

export default connect(mapStateToProps)(Question);
