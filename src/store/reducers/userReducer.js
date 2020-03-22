import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  USER_LOGOUT,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  MARK_NOTIFICATION_READ
} from "../types";

const initialState = {
  credentials: {},
  authenticated: false,
  likes: [],
  notifications: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      };

    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      };

    case USER_LOGOUT:
      return {
        ...initialState
      };

    case LIKE_SCREAM:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            screamId: action.payload.screamId
          }
        ]
      };

    case UNLIKE_SCREAM:
      return {
        ...state,
        likes: state.likes.filter(
          like => like.screamId !== action.payload.screamId
        )
      };

    case MARK_NOTIFICATION_READ:
      state.notifications.forEach(not => (not.read = true));
      console.log(state.notifications, "notitications");
      return {
        ...state
      };

    default:
      return state;
  }
};

export default userReducer;
