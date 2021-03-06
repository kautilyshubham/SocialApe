import { instance } from "./axios";
import urlConst from "./urlConst";
import keyConst from "./keyConst";
import {
  LOADING_UI,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  SET_SCREAMS,
  DELETE_SCREAM,
  POST_SCREAM,
  ADD_COMMENT,
  SET_SCREAM
} from "../store/types";

// get all screams
export const $getAllScreams = success => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });

  instance
    .get(urlConst.screams_url)
    .then(res => {
      success(res);
      dispatch({ type: SET_SCREAMS, payload: res.data });
      dispatch({ type: LOADING_UI, payload: false });
    })
    .catch(err => {
      dispatch({ type: LOADING_UI, payload: false });
      console.log(err);
    });
};

// get one scream
export const $getScream = (screamId, success) => dispatch => {
  const url = `${urlConst.scream_url}${screamId}`;
  instance
    .get(url)
    .then(res => {
      dispatch({ type: SET_SCREAM, payload: res.data });
      success(res);
    })
    .catch(err => {
      console.log(err);
    });
};

// post a screams
export const $postScream = (scream, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });
  instance
    .post(urlConst.scream_url, scream)
    .then(res => {
      dispatch({ type: POST_SCREAM, payload: res.data });
      dispatch({ type: LOADING_UI, payload: false });
      success();
    })
    .catch(err => {
      dispatch({ type: LOADING_UI, payload: false });
      console.log(err);
    });
};

// like a screams
export const $likeScream = (screamId, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });
  const url = `${urlConst.scream_url}${screamId}/like`;
  instance
    .post(url)
    .then(res => {
      dispatch({ type: LIKE_SCREAM, payload: res.data });
      dispatch({ type: LOADING_UI, payload: false });

      success();
    })
    .catch(err => {
      dispatch({ type: LOADING_UI, payload: false });
      console.log(err);
    });
};

// comment on  a screams
export const $addComment = (screamId, data, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });
  const url = `${urlConst.scream_url}${screamId}/comment`;
  instance
    .post(url, data)
    .then(res => {
      dispatch({ type: ADD_COMMENT, payload: res.data });
      dispatch({ type: LOADING_UI, payload: false });

      success();
    })
    .catch(err => {
      dispatch({ type: LOADING_UI, payload: false });
      console.log(err);
    });
};

// unlike a scream
export const $unlikeScream = (screamId, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });

  const url = `${urlConst.scream_url}${screamId}/unlike`;
  instance
    .post(url)
    .then(res => {
      dispatch({ type: UNLIKE_SCREAM, payload: res.data });
      dispatch({ type: LOADING_UI, payload: false });

      success();
    })
    .catch(err => {
      dispatch({ type: LOADING_UI, payload: false });
      console.log(err);
    });
};

// delete a scream
export const $deleteScream = (screamId, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });

  const url = `${urlConst.scream_url}${screamId}/delete`;
  instance
    .post(url)
    .then(res => {
      dispatch({ type: DELETE_SCREAM, payload: screamId });
      dispatch({ type: LOADING_UI, payload: false });
      success();
    })
    .catch(err => {
      dispatch({ type: LOADING_UI, payload: false });
      console.log(err);
    });
};

// others user profile
export const $getOtherProfile = (userHandle, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });
  const url = `${urlConst.user_url}${userHandle}`;
  instance
    .get(url)
    .then(res => {
      success(res.data);
      dispatch({ type: LOADING_UI, payload: false });
    })
    .catch(err => {
      dispatch({ type: LOADING_UI, payload: false });
      console.log(err);
    });
};
