import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./card-slice";
const store = configureStore({
  reducer: { ui: uiSlice.reducer, cartSlice: cartSlice.reducer },
});

export default store;
