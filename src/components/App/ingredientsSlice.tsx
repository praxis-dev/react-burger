import { createSlice } from "@reduxjs/toolkit";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
  },
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    logIngredients: (state) => {
      console.log(state.ingredients);
    },
  },
});

export const { setIngredients, logIngredients } = ingredientsSlice.actions;
