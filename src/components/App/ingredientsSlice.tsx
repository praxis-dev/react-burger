import { createSlice } from "@reduxjs/toolkit";
type ingredientsInStack = any[];

export const ingredientsSlice = createSlice({
  name: "ingredients",

  initialState: {
    ingredients: [],
    ingredientPopupData: {},
    orderNumber: 0,
    ingredientsInStack: [] as ingredientsInStack,
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
    addIngredientToStack: (state, action) => {
      state.ingredientsInStack.push(action.payload);
    },
  },
});

export const { setIngredients, logIngredients, ingredientDataForPopup } =
  ingredientsSlice.actions;
