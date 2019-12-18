import {
  GET_BUG,
  GET_BUGS,
  ADD_BUG,
  UPDATE_BUG,
  DELETE_BUG,
  BUG_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";

const inititalState = {
  bugs: [],
  bug: null,
  loading: true,
  error: {}
};

export default function(state = inititalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BUGS:
      return {
        ...state,
        bugs: payload,
        loading: false
      };
    case GET_BUG:
    case UPDATE_BUG:
      return {
        ...state,
        bug: payload,
        loading: false
      };
    case ADD_BUG:
      return {
        ...state,
        bugs: [payload, ...state.bugs],
        loading: false
      };
    case DELETE_BUG:
      return {
        ...state,
        bugs: state.bugs.filter(bugs => bug._id !== payload),
        loading: false
      };
    case BUG_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        bug: { ...state.bug, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        bug: {
          ...state.bug,
          comments: state.bug.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
