import {
  GIT_FAILURE,
  GIT_REQUEST,
  GIT_SUCCESS,
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
} from "./actionTypes";

const init = {
  userdet: "",
  git: [],
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case USER_SUCCESS:
      return {
        ...state,
        userdet: payload,
      };
    case USER_REQUEST:
      return {
        ...state,
      };
    case USER_FAILURE:
      return {
        ...state,
      };
    case GIT_REQUEST:
      return {
        ...state,
      };
    case GIT_SUCCESS:
      return {
        ...state,
        git: payload,
      };
    case GIT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
