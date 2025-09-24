import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billing: "monthly",
  addOnSelected: [],
};

const addOnSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    billingType(state, action) {
      state.billing = action.payload;
    },

    selectedAddOns(state, action) {
      const addOn = action.payload;
      const addOnExists = state.addOnSelected.find(
        (item) => item.type === addOn.type
      );

      // Remove the addOn it it already exists
      if (addOnExists) {
        state.addOnSelected = state.addOnSelected.filter(
          (item) => item.type !== addOn.type
        );
      } else {
        // push the addOn to state
        state.addOnSelected.push(addOn);
      }
    },
  },
});

export const { billingType, selectedAddOns } = addOnSlice.actions;

export default addOnSlice.reducer;
