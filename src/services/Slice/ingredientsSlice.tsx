import { createSlice } from "@reduxjs/toolkit";
export type ingredientsInStack = any[];

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
    removeIngredientFromStack: (state, action) => {
      const index = state.ingredientsInStack.findIndex(
        (item: any) => item.name === action.payload
      );
      state.ingredientsInStack.splice(index, 1);
    },
    markElementAsStacked: (state, action) => {
      const index = state.ingredientsInStack.findIndex(
        (item: any) => item.name === action.payload
      );
      state.ingredientsInStack[index].isStacked = true;
    },
    rearrangeIngredientsInStack: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const dragCard = state.ingredientsInStack[dragIndex];
      state.ingredientsInStack.splice(dragIndex, 1);
      state.ingredientsInStack.splice(hoverIndex, 0, dragCard);
    },
  },
});

export const { setIngredients, logIngredients, ingredientDataForPopup } =
  ingredientsSlice.actions;
