import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { handleAddPollAnswer } from "../../actions/questionPolls"

const PollForm = (props) => {

    const navigate = useNavigate();
    const {id} = useParams();
    const[choosedOption, setChoosedOption] = useState('');
    const [continueRendering, setContinueRendering] = useState(false);

    useEffect(() => {
        if (props.questions[id]) {
            setContinueRendering(true)
        }
    }, [props.questions, id])

    if (!continueRendering) {
        return <h1>PAGE NOT FOUND</h1>
    }

    const handleSubmitNewPoll= (e) => {
        e.preventDefault();
        props.dispatch(handleAddPollAnswer({ choosedOption, id }));
        navigate(`/questions/${id}/result`)
    }

    const handleChangeOption= (e) =>{
        setChoosedOption(e.target.value)
    }

    const pollQuestionData = {
        authorId: props.questions[id].author,
        authorName: props.users[props.questions[id].author].name,
        avatar: props.users[props.questions[id].author].avatarURL,
        optionOne: props.questions[id].optionOne.text,
        optionTwo: props.questions[id].optionTwo.text,
    }

    return(
        <div className="poll-result-page">
            <div className="poll-result">
          <img
            src={pollQuestionData.avatar}
            alt={pollQuestionData.avatar === null ? "" : `Avatar of ${pollQuestionData.authorName}`}
            className="avatar"
          />
          <div className="poll-info">
            <strong className="user-name">{pollQuestionData.authorName} Asks, Would You Rather!!! </strong>
            <div className="poll-options" >
                <div style={{padding: "10px 0"}}>
                <input data-testid="ques-radio-btn" type="radio" name="optionOne" value="optionOne" className="option" onChange={handleChangeOption}/><label>{pollQuestionData.optionOne}</label>
                </div>
                <div style={{padding: "10px 0"}}>
                <input data-testid="ques-radio-btn" type="radio" name="optionOne" value="optionTwo" className="option" onChange={handleChangeOption}/><label>{pollQuestionData.optionTwo}</label>
                </div>
            </div>
            <button type="submit" disabled={choosedOption===""} onClick={(e)=> handleSubmitNewPoll(e)}>Submit Poll</button>
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

export default connect(mapStateToProps)(PollForm)