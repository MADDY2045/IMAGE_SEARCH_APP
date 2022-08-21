import axios from "axios";
import { BASEURL } from "../services/axiosConfig";
import { FETCH_IMAGES, RECEIVE_INPUT, LOADING } from "./types";

export const fetchImages = (response) => {
  return {
    type: FETCH_IMAGES,
    payload: response,
  };
};

export const receiveSearchInput = (input) => {
  return {
    type: RECEIVE_INPUT,
    payload: input,
  };
};

export const setLoading = (data) => {
  return {
    type: LOADING,
    payload: data,
  };
};

export const fetchUserData = (search) => (dispatch) => {
  try {
    axios
      .get(
        `${BASEURL}/search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      )
      .then((res) => {
        if (res.data && res.data.results && res.status === 200) {
          dispatch(fetchImages(res.data.results));
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
      });
  } catch (error) {
    dispatch(setLoading(false));
    return;
  }
};
