import axios from "axios";
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

export const getDataRequest = (data) => {
  return {
    type: GET_DATA_REQUEST,
    payload: data,
  };
};
export const getData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  axios("http://localhost:3005/data")
    .then((res) => dispatch(getDataSuccess(res.data)))
    .catch((error) => dispatch(getDataFailure(error)));
};

export const getDataSuccess = (data) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: data,
  };
};

export const getDataFailure = (err) => {
  return {
    type: GET_DATA_FAILURE,
    payload: err,
  };
};

export const addDataRequest = (data) => {
  return {
    type: ADD_DATA_REQUEST,
    payload: data,
  };
};
export const addData = (payload) => (dispatch) => {
  dispatch(addDataRequest());
  axios
    .post("http://localhost:3005/data", payload)
    .then((res) => dispatch(addDataSuccess(res.data)))
    .catch((error) => dispatch(addDataFailure(error)))
    .finally(() => dispatch(getData()));
};

export const addDataSuccess = (data) => {
  return {
    type: ADD_DATA_SUCCESS,
    payload: data,
  };
};

export const addDataFailure = (err) => {
  return {
    type: ADD_DATA_FAILURE,
    payload: err,
  };
};

export const deleteDataRequest = (data) => {
  return {
    type: DELETE_DATA_REQUEST,
    payload: data,
  };
};
export const deleteData = (id) => (dispatch) => {
  dispatch(deleteDataRequest());
  axios
    .delete(`http://localhost:3005/data/${id}`)
    .then((res) => dispatch(deleteDataSuccess(res.data)))
    .catch((error) => dispatch(deleteDataFailure(error)))
    .finally(() => dispatch(getData()));
};

export const deleteDataSuccess = (data) => {
  return {
    type: DELETE_DATA_SUCCESS,
    payload: data,
  };
};

export const deleteDataFailure = (err) => {
  return {
    type: DELETE_DATA_FAILURE,
    payload: err,
  };
};

export const filterDataRequest = (data) => {
  return {
    type: FILTER_DATA_REQUEST,
    payload: data,
  };
};
export const filterData = (company) => (dispatch) => {
  dispatch(filterDataRequest());
  axios(`http://localhost:3005/data?company=${company}`)
    .then((res) => dispatch(filterDataSuccess(res.data)))
    .catch((error) => dispatch(filterDataFailure(error)));
};

export const filterDataSuccess = (data) => {
  return {
    type: FILTER_DATA_SUCCESS,
    payload: data,
  };
};

export const filterDataFailure = (err) => {
  return {
    type: FILTER_DATA_FAILURE,
    payload: err,
  };
};
