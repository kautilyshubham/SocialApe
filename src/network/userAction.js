import { instance } from "./axios";
import urlConst from "./urlConst";
import keyConst from "./keyConst";
import {
  LOADING_UI,
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  USER_LOGOUT
} from "../store/types";

export const $userLogin = (userData, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });

  instance
    .post(urlConst.login_url, userData, keyConst.Raw_Header)
    .then(res => {
      if (res) {
        localStorage.setItem("FBToken", res.data[keyConst.token]);
        success(res);
        dispatch({ type: SET_AUTHENTICATED });
        dispatch({ type: LOADING_UI, payload: false });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOADING_UI, payload: false });
    });
};

export const $userSignup = (userData, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });

  instance
    .post(urlConst.signup_url, userData)
    .then(res => {
      localStorage.setItem("FBToken", res.data[keyConst.token]);
      success(res);
      dispatch({ type: SET_AUTHENTICATED });
      dispatch({ type: LOADING_UI, payload: false });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOADING_UI, payload: false });
    });
};
export const $uploadProfileImage = (image, success) => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });
  instance
    .post(urlConst.upload_img, image)
    .then(res => {
      if (res) {
        dispatch(
          $getUserData(res => {
            console.log(res);
          })
        );
      }
      dispatch({ type: LOADING_UI, payload: false });

      success(res);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOADING_UI, payload: false });
    });
};

export const $editUserDetail = (userDetail, success) => {
  return dispatch => {
    dispatch({ type: LOADING_UI, payload: true });
    instance
      .post(urlConst.user_url, userDetail)
      .then(res => {
        success();
        dispatch($getUserData(success => {}));
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: LOADING_UI, payload: false });
      });
  };
};

export const $getUserData = success => dispatch => {
  dispatch({ type: LOADING_UI, payload: true });
  instance.get(urlConst.user_url).then(res => {
    success(res.data);
    dispatch({ type: SET_USER, payload: res.data });
    dispatch({ type: LOADING_UI, payload: false });
  });
};

export const $logoutUser = success => dispatch => {
  localStorage.removeItem("FBToken");
  dispatch({ type: SET_UNAUTHENTICATED });
  dispatch({ type: USER_LOGOUT });
  success();
};

// notifications
export const $getAllNotifications = success => dispatch => {
  instance
    .get(urlConst.notifications_url)
    .then(res => {
      success(res);
    })
    .catch(err => {
      console.log(err);
    });
};
// read notifications
