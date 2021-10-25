import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: "",
};

const formSlice = createSlice({
  name: "serviceAdd",
  initialState,
  reducers: {
    changeServiceField(state, action) {
      const { type, value } = action.payload;
      state[type] = value;
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { changeServiceField, clearForm } = formSlice.actions;
export default formSlice.reducer;
