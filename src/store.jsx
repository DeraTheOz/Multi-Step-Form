import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./features/user-info/userInfoSlice";
import plansReducer from "./features/plans/planSlice";
import addOnsReducer from "./features/addOns/addOnSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    plan: plansReducer,
    addOns: addOnsReducer,
  },
});

export default store;
