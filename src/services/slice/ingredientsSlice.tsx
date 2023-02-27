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
    userData: {},
    authUser: false,
    userLocation: "",
  },
  reducers: {
    _UPDATE_INITIAL_LOCATION: (state, action) => {
      state.userLocation = action.payload;
      console.log("userLocation added to state: " + action.payload);
      console.log("userLocation in state: " + state.userLocation);
    },
    _CLEAR_INITIAL_LOCATION: (state) => {
      console.log("clearing triggered");
      state.userLocation = "";
    },
    _UPDATE_USER_REQUEST: (state, action) => {
      state.userData = action.payload as any;
    },
    _UPDATE_USER_SUCCESS: (state, action) => {
      state.userData = action.payload;
    },
    _UPDATE_USER_ERROR: (state, action) => {
      state.error = action.payload;
      console.log("error: " + action.payload);
    },
    _GET_USER_DATA_REQUEST: (state, action) => {
      state.userData = action.payload as any;
    },
    _GET_USER_DATA_SUCCESS: (state, action) => {
      state.userData = action.payload;
    },
    _GET_USER_DATA_ERROR: (state, action) => {
      state.error = action.payload;
      console.log("error: " + action.payload);
    },
    _LOGOUT_USER_REQUEST: (state, action) => {
      state.userData = action.payload as any;
    },
    _LOGOUT_USER_SUCCESS: (state) => {
      state.userData = {};
    },
    _LOGOUT_USER_ERROR: (state, action) => {
      state.error = action.payload;
      console.log("error: " + action.payload);
    },

    _LOGIN_REQUEST: (state, action) => {
      state.userData = action.payload as any;
    },
    _LOGIN_SUCCESS: (state, action) => {
      state.userData = action.payload;
    },
    _LOGIN_ERROR: (state, action) => {
      state.error = action.payload;
      console.log("error: " + action.payload);
    },
    _REGISTER_REQUEST: (state, action) => {
      state.userData = action.payload as any;
    },
    _REGISTER_SUCCESS: (state, action) => {
      state.userData = action.payload;
    },
    _REGISTER_ERROR: (state, action) => {
      state.error = action.payload;
      console.log("error: " + action.payload);
    },
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
