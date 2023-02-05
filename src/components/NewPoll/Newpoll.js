import { useState } from "react"
import { connect } from "react-redux"
import { handleSubmitNewPoll } from "../../actions/questionPolls"
import './NewPoll.css'
import { useNavigate } from "react-router-dom"

const NewPoll = (props) => {

    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState('')
    const [secondOption, setSecondOption] = useState('')

    const handleOptionChange = (e) => {
        if(e.target.name === "firstOption"){
            setFirstOption(e.target.value);
        } else{
            setSecondOption(e.target.value);
        }
    }

    const handleNewFormSubmit = (e) =>{
        e.preventDefault()
        props.dispatch(handleSubmitNewPoll({optionOneText:firstOption, optionTwoText:secondOption}));
        navigate("/");
    }

    return(
        <div>
            <h1 className="new-poll-heading">Create New Poll</h1>
            <div className="new-poll-page">
                <h3>Would You Rather</h3>
                <form className="new-poll-form" onSubmit={handleNewFormSubmit}>
                    <input type="text" placeholder="Enter First Option" name="firstOption" onChange={(e)=> handleOptionChange(e)}/>
                    <input type="text" placeholder="Enter Second Option" name="secondOption" onChange={(e) => handleOptionChange(e)}/>
                    <button type="submit" disabled={firstOption==="" || secondOption===""} className="new-poll-btn" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default connect()(NewPoll) 