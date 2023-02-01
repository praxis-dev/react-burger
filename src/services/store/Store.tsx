import { configureStore } from "@reduxjs/toolkit";
import { ingredientsSlice } from "../slice/ingredientsSlice";

const thunkMidleware = require("redux-thunk").default;

export const store = configureStore({
  reducer: {
    ingredients: ingredientsSlice.reducer,
  },
  middleware: (applyMiddleware) => applyMiddleware(thunkMidleware),
});
