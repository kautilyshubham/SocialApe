import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./userReducer";
import screamReducer from "./screamReducer";
import uiReducer from "./uiReducer";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  scream: screamReducer,
  UI: uiReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
