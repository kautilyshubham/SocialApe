import { LOADING_UI } from "../types";

const initialState = {
  showLoader: false,
  loading: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};

export default uiReducer;
