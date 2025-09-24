import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  emailAddress: "",
  phoneNumber: "",
  errors: {
    fullName: null,
    emailAddress: null,
    phoneNumber: null,
  },
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    handleFormUpdate(state, action) {
      const { inputField, value } = action.payload;
      console.log(action.payload);
      state[inputField] = value;
    },

    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const { handleFormUpdate, setErrors } = userInfoSlice.actions;
export default userInfoSlice.reducer;
