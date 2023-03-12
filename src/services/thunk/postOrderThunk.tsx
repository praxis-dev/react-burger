import { Dispatch } from "../../interfaces";
import { postOrderApi } from "../api/postOrderApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const postOrderThunk = (data: any) => {
  return function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._ORDER_NUMBER_REQUEST("Loading"));

    postOrderApi(data)
      .then((result) => {
        dispatch(
          ingredientsSlice.actions._ORDER_NUMBER_SUCCESS(result.order.number)
        );
      })
      .catch((error) => {
        if (error instanceof Error) {
          dispatch(ingredientsSlice.actions._ORDER_NUMBER_ERROR(error.message));
        } else {
          dispatch(
            ingredientsSlice.actions._ORDER_NUMBER_ERROR(
              "An unknown error occurred."
            )
          );
        }
      });
  };
};
