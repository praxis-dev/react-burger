import { configureStore } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredientsSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice.reducer,
  },
});
