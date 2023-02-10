import { hideLoading, showLoading } from "react-redux-loading-bar";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_Data";
import { addAnswerToUser, addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTOINS"
export const ADD_ANSWERS = "ADD_ANSWERS"

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestions(question) {
  return {
    type: ADD_QUESTIONS,
    question,
  };
}

export function addAnswers(answer) {
  return {
    type: ADD_ANSWERS,
    answer,
  };
}

export function handleSubmitNewPoll(newQuestion){
  return (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading())
    _saveQuestion({
      ...newQuestion,
      author: authedUser
    }).then((question) => {
      dispatch(addQuestions(question))
      dispatch(addQuestionToUser(question))
    })
    .then(()=>{
      dispatch(hideLoading());
    })
  }
}

export function handleAddPollAnswer(answer){
  return (dispatch, getState) => {
    const {authedUser} = getState();
    let payload = {
      authedUser: authedUser,
      qid: answer.id,
      answer: answer.choosedOption,
    }

    dispatch(showLoading())
    _saveQuestionAnswer(payload).then((answer) => {
      dispatch(addAnswers(payload))
      dispatch(addAnswerToUser(payload))
    })
    .then(()=>{
      dispatch(hideLoading());
    })
  }
}