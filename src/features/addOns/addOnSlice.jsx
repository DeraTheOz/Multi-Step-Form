import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addOnSelected: [],
};

const addOnSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    selectedAddOns(state, action) {
      const addOnExists = state.addOnSelected.find(
        (item) => item.type === action.payload.type
      );

      if (addOnExists) {
        state.addOnSelected = state.addOnSelected.filter(
          (item) => item.type !== action.payload.type
        );
      } else {
        state.addOnSelected.push(action.payload);
      }
    },
  },
});

export const { selectedAddOns } = addOnSlice.actions;

export default addOnSlice.reducer;
