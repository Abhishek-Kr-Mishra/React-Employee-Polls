import { ADD_QUESTIONS, RECEIVE_QUESTIONS} from "../actions/questionPolls";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTIONS:
      return{
        ...state,
        [action.question.id]: {...action.question}
      }
    default:
      return state;
  }
}
