import { createSlice } from "@reduxjs/toolkit";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
    ingredientPopupData: {},
  },
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    logIngredients: (state) => {
      console.log(state.ingredients);
    },
    ingredientDataForPopup: (state, action) => {
      state.ingredientPopupData = action.payload;
    },
  },
});

export const { setIngredients, logIngredients, ingredientDataForPopup } =
  ingredientsSlice.actions;
