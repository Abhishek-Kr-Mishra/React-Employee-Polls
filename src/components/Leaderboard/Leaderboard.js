import { connect } from "react-redux"
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail"

const Leaderboard = (props) => {
    console.log("users ", props.users)

    const userDetail= Object.keys(props.users).map((user) => (
        {
            id: user,
            avatar: props.users[user].avatarURL,
            totalCountOfAnswerQuestions: Object.keys(props.users[user].answers).length + (props.users[user].questions).length,
            totalAnswers: Object.keys(props.users[user].answers).length,
            totalQuestions: (props.users[user].questions).length,
            name: props.users[user].name
        }
    ))

    const sortedUser = userDetail.sort((a, b) => 
        b.totalCountOfAnswerQuestions - a.totalCountOfAnswerQuestions
    )
    console.log("sortedUsers ", sortedUser)

    return(
        <div>
            {
                sortedUser.map((user) => (
                    <EmployeeDetail key={user.id} employeeDetail={user} />
                ))
            }
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return{
        users
    }
  };

export default connect(mapStateToProps)(Leaderboard)