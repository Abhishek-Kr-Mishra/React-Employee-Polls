import React, { useState } from 'react'
import { connect } from 'react-redux';
import './Dashboard.css'

const Dashboard = () => {

  const [questionType, setQuestionType] = useState("Unanswered Questions");

  const handleQuestionTypes = () => {
    let type = questionType === 'Unanswered Questions' ? 'Answered Questions' : 'Unanswered Questions'
    setQuestionType(type)
  }

  return (
    <div>
      <div className="question-types">
        <span className="question-type-text">{questionType}</span>
        <button className="question-type-btn" onClick={handleQuestionTypes}>{questionType === 'Unanswered Questions' ? 'Answered Questions' : 'Unanswered Questions'}</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users, questions }) => ({
  users,
  questions
});

export default connect()(Dashboard)
