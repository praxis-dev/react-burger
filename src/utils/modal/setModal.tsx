import { useCallback } from "react";
import { store } from "../../services/store/Store";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";

export const setModal = (value: boolean) => {
  store.dispatch(ingredientsSlice.actions._MODAL(value));
};
