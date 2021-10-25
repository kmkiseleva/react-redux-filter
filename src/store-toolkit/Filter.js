import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterField(state, action) {
      const { type, value } = action.payload;
      state[type] = value;
    },
    clearFilterField() {
      return initialState;
    },
  },
});

export const { changeFilterField, clearFilterField } = filterSlice.actions;
export default filterSlice.reducer;
