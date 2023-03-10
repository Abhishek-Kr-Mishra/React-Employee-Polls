import {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  RECEIVE_USERS,
} from "../actions/users";
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id,
          ],
        },
      };
    case ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.answer.authedUser]: {
          ...state[action.answer.authedUser],
          answers: {
            ...state[action.answer.authedUser].answers,
            [action.answer.qid]: action.answer.answer,
          },
        },
      };
    default:
      return state;
  }
}
