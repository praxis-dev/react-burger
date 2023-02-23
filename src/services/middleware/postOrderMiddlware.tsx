import { postOrderApi } from "../api/postOrderApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const postOrderMiddleware = (data: any) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._ORDER_NUMBER_REQUEST("Loading"));

    const result = await postOrderApi(data);

    if (!result.ok) {
      dispatch(ingredientsSlice.actions._ORDER_NUMBER_ERROR(result.statusText));
    }

    const res = await result.json();

    dispatch(ingredientsSlice.actions._ORDER_NUMBER_SUCCESS(res.order.number));
  };
};
