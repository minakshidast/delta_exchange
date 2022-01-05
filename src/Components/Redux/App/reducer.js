import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
  FILTER_DATA_REQUEST,
  FILTER_DATA_SUCCESS,
  FILTER_DATA_FAILURE,
} from "./actionTypes";

const iniState = {
  data: [],
  isLoading: false,
  isError: true,
};

export const appReducer = (state = iniState, { type, payload }) => {
  console.log(state.payload);
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, payload],
      };
    case ADD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case DELETE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, payload],
      };
    case DELETE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, payload],
      };
    case ADD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case FILTER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FILTER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, payload],
      };
    case FILTER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
