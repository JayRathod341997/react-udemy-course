import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isVisible: false },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
