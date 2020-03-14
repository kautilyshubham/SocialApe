import {
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  SET_SCREAMS,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  ADD_COMMENT
} from "../types";

const initialState = {
  screams: [],
  scream: {}
};

const screamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload
      };

    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      const index = state.screams.findIndex(
        scream => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      return {
        ...state
      };

    case DELETE_SCREAM:
      const newIndex = state.screams.findIndex(
        scream => scream.screamId === action.payload
      );
      state.screams.splice(newIndex, 1);
      return {
        ...state
      };

    case SET_SCREAM:
      return {
        ...state,
        scream: { ...action.payload }
      };

    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams]
      };
    case ADD_COMMENT:
      let comments = [action.payload, ...state.scream.comments];
      let scream = state.scream;
      scream.comments = comments;
      scream.commentCount += 1;
      let tempScreams = [...state.screams];
      const commentindex = tempScreams.findIndex(
        scream => scream.screamId === action.payload.screamId
      );
      tempScreams[commentindex].commentCount += 1;
      return {
        ...state,
        screams: tempScreams,
        scream: scream
      };

    default:
      return state;
  }
};

export default screamReducer;
