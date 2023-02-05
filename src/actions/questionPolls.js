import { hideLoading, showLoading } from "react-redux-loading-bar";
import { _saveQuestion } from "../utils/_Data";
import { addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTOINS"

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

export function handleSubmitNewPoll(newQuestion){
  return (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading())
    _saveQuestion({
      ...newQuestion,
      author: authedUser
    }).then((question) => {
      console.log("res", question)
      dispatch(addQuestions(question))
      dispatch(addQuestionToUser(question))
    }).then(()=>{
      dispatch(hideLoading());
    })
  }
}