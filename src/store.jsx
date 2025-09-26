import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./features/user-info/userInfoSlice";
import plansReducer from "./features/plans/planSlice";
import addOnsReducer from "./features/addOns/addOnSlice";

const appReducer = combineReducers({
  userInfo: userInfoReducer,
  plan: plansReducer,
  addOns: addOnsReducer,
});

// Root reducer for resetting state
const rootReducer = (state, action) => {
  if (action.type === "reset") {
    return appReducer(undefined, action); // reset entire store state
  }
  return appReducer(state, action);
};

// Configure store with root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
