import { Dispatch } from "../../interfaces";
import { postOrderApi } from "../api/postOrderApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const postOrderThunk = (data: any) => {
  return async function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._ORDER_NUMBER_REQUEST("Loading"));

    const result = await postOrderApi(data);

    const res = await result;

    dispatch(ingredientsSlice.actions._ORDER_NUMBER_SUCCESS(res.order.number));
  };
};
