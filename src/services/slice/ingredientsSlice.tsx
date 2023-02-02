import { createSlice } from "@reduxjs/toolkit";
export type ingredientsInStack = any[];

export const ingredientsSlice = createSlice({
  name: "ingredients",

  initialState: {
    ingredients: [],
    ingredientPopupData: {},
    orderNumber: 0,
    ingredientsInStack: [] as ingredientsInStack,
    error: "",
    ingredientsBackup: [],
    orderNumberBackup: 0,
  },
  reducers: {
    _INGREDIENTS_REQUEST: (state) => {
      state.ingredientsBackup = state.ingredients;
    },
    _INGREDIENTS_SUCCESS: (state, action) => {
      state.ingredients = action.payload;
    },
    _INGREDIENTS_ERROR: (state, action) => {
      state.error = action.payload;
      console.log("error: " + action.payload);
      state.ingredients = state.ingredientsBackup;
    },
    _ORDER_NUMBER_REQUEST: (state, action) => {
      state.orderNumberBackup = state.orderNumber;
      state.orderNumber = action.payload as any;
    },
    _ORDER_NUMBER_SUCCESS: (state, action) => {
      state.orderNumber = action.payload;
    },
    _ORDER_NUMBER_ERROR: (state, action) => {
      state.error = action.payload;
      console.log("error: " + action.payload);
      state.orderNumber = state.orderNumberBackup;
    },
    ingredientDataForPopup: (state, action) => {
      state.ingredientPopupData = action.payload;
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

export const { ingredientDataForPopup } = ingredientsSlice.actions;
