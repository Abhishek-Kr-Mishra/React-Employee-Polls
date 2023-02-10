import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import './PollResult.css'

const PollResult = (props) => {

    const {id} = useParams();

    const percentageCalculation = (particularVoteCount, totalVoteCount) => {
        if(totalVoteCount !== 0){
            return Math.round((particularVoteCount / totalVoteCount) *100);
        }
        return '**'
    }

    const pollResultData = {
        authorId: props.questions[id].author,
        authorName: props.users[props.questions[id].author].name,
        avatar: props.users[props.questions[id].author].avatarURL,
        optionOne: props.questions[id].optionOne.text,
        optionTwo: props.questions[id].optionTwo.text,
        optionOneVoteCount: props.questions[id].optionOne.votes.length,
        optionTwoVoteCount: props.questions[id].optionTwo.votes.length,
        totalVoteCount: props.questions[id].optionOne.votes.length +  props.questions[id].optionTwo.votes.length,
        optionOnePercentage: percentageCalculation(props.questions[id].optionOne.votes.length, (props.questions[id].optionOne.votes.length +  props.questions[id].optionTwo.votes.length)),
        optionTwoPercentage: percentageCalculation(props.questions[id].optionTwo.votes.length, (props.questions[id].optionOne.votes.length +  props.questions[id].optionTwo.votes.length)),
        myVote: props.users[props.authedUser].answers[id]
    }

    const queryParameters = new URLSearchParams(window.location.search)
    return(
        <div className="poll-result-page">
            <div className="poll-result">
          <img
            src={pollResultData.avatar}
            alt={pollResultData.avatar === null ? "" : `Avatar of ${pollResultData.authorName}`}
            className="avatar"
          />
          <div className="poll-info">
            <strong className="user-name">{pollResultData.authorName} Asks!!! </strong>
            <p>Option One: {pollResultData.optionOne && pollResultData.optionOne}</p>
            <p>Option One Vote Count: {pollResultData.optionOneVoteCount && pollResultData.optionOneVoteCount}</p>
            <p>Option One Vote Percentage: {pollResultData.optionOnePercentage && pollResultData.optionOnePercentage}%</p>
            <hr />
            <p>Option Two: {pollResultData.optionTwo && pollResultData.optionTwo}</p>
            <p>Option Two Vote Count: {pollResultData.optionTwoVoteCount && pollResultData.optionTwoVoteCount}</p>
            <p>Option Two Vote Percentage: {pollResultData.optionTwoPercentage && pollResultData.optionTwoPercentage}%</p>
            <strong>MY VOTE: {pollResultData.myVote}</strong>
          </div>
        </div>
        </div>
    )
}

const mapStateToProps = ({ questions, users, authedUser }) => {
    return{
        questions,
        users,
        authedUser
    }
};
  

export default connect(mapStateToProps)(PollResult)