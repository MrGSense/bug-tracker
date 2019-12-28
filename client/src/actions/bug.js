import axios from "axios";
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

// Get bugs
export const getBugs = () => async dispatch => {
  try {
    const res = await axios.get("/api/bugs");

    dispatch({
      type: GET_BUGS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BUG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add bug
export const addBug = (formData, history, edit = false) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/bugs", formData, config);

    if (!edit) {
      history.push("/bugs");
    }

    dispatch({
      type: ADD_BUG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BUG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete bug
export const deleteBug = id => async dispatch => {
  try {
    await axios.delete(`/api/bugs/${id}`);

    dispatch({
      type: DELETE_BUG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: BUG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get bug
export const getBug = id => async dispatch => {
  try {
    const res = await axios.get(`/api/bugs/${id}`);

    dispatch({
      type: GET_BUG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BUG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
export const addComment = (bugId, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(
      `/api/bugs/${bugId}/comment`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BUG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment
export const deleteComment = (bugId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/posts/${bugId}/comment/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });
  } catch (err) {
    dispatch({
      type: BUG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
