import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billing: "monthly",
  planSelected: [],
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    billingType(state, action) {
      state.billing = action.payload;
    },
    selectedPlan(state, action) {
      state.planSelected = action.payload;
    },
  },
});

export const { billingType, selectedPlan } = planSlice.actions;

export default planSlice.reducer;
