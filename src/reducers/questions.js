import { ADD_ANSWERS, ADD_QUESTIONS, RECEIVE_QUESTIONS} from "../actions/questionPolls";

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
      };
    case ADD_ANSWERS:
      return{
        ...state,
        [action.answer.qid]:{
          ...state[action.answer.qid],
          [action.answer.answer]: {
            ...state[action.answer.qid][action.answer.answer],
            votes: [...state[action.answer.qid][action.answer.answer].votes, action.answer.authedUser]
          }
        }
      };
    default:
      return state;
  }
}
