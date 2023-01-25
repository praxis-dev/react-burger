import { createSlice } from "@reduxjs/toolkit";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
    ingredientPopupData: {},
    orderNumber: 0,
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
    saveOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { setIngredients, logIngredients, ingredientDataForPopup } =
  ingredientsSlice.actions;
