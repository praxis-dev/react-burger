import { configureStore } from "@reduxjs/toolkit";
import { ingredientsSlice } from "../Slice/ingredientsSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice.reducer,
  },
});
