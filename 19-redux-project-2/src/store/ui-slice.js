import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isVisited: false },
  reducers: {
    toggle(state) {
      state.isVisited = !state.isVisited;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
