import { connect } from "react-redux";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";

const Leaderboard = (props) => {
  return (
    <div>
      {props.leaderboardData
        ? props.leaderboardData.map((user) => (
            <EmployeeDetail key={user.id} employeeDetail={user} />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const leaderboardData = Object.keys(users)
    .map((user) => ({
      id: user,
      name: users[user].name,
      avatar: users[user].avatarURL,
      answeredQuestions: Object.keys(users[user].answers).length,
      createdQuestions: Object.keys(questions).filter(
        (q) => questions[q].author === user
      ).length,
    }))
    .sort(
      (a, b) =>
        b.answeredQuestions +
        b.createdQuestions -
        (a.answeredQuestions + a.createdQuestions)
    );
  return {
    authedUser,
    leaderboardData,
  };
};

export default connect(mapStateToProps)(Leaderboard);
