import axios from "axios";
import {
  GIT_FAILURE,
  GIT_REQUEST,
  GIT_SUCCESS,
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
} from "../actionTypes";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};
export const userSucceess = (payload) => {
  return {
    type: USER_SUCCESS,
    payload,
  };
};

export const userFailure = () => {
  return {
    type: USER_FAILURE,
  };
};
export const userDetails =
  ({ username, token }) =>
  async (dispatch) => {
    dispatch(userRequest());
    try {
      let res = await axios.get(
        `https://masai-api-mocker.herokuapp.com/user/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(userSucceess(res.data));
      console.log(res.data);
    } catch (error) {
      dispatch(userFailure());
    }
  };

export const gitRequest = () => {
  return {
    type: GIT_REQUEST,
  };
};
export const gitSucceess = (payload) => {
  return {
    type: GIT_SUCCESS,
    payload,
  };
};

export const gitFailure = () => {
  return {
    type: GIT_FAILURE,
  };
};

export const gitUser = (user, page) => async (dispatch) => {
  dispatch(gitRequest());
  try {
    let res = await axios.get(
      `https://api.github.com/search/users?q=${user}&page=${page}&per_page=5`
    );
    dispatch(gitSucceess(res.data.items));
    console.log(res.data.items);
  } catch (error) {
    dispatch(gitFailure());
  }
};
