import { postOrder } from "../api/postOrder";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const postOrderThunk = (data: any) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._ORDER_NUMBER_REQUEST("Loading"));

    const result = await fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: data.map((element: any) => element._id),
      }),
    });

    if (!result.ok) {
      dispatch(ingredientsSlice.actions._ORDER_NUMBER_ERROR(result.statusText));
    }

    const res = await result.json();

    dispatch(ingredientsSlice.actions._ORDER_NUMBER_SUCCESS(res.order.number));
  };
};
