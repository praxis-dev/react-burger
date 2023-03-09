import { registerNewUserApi } from "../api/registerNewUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const registerNewUserThunk = (data: any) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._REGISTER_REQUEST("Loading"));

    const result = await registerNewUserApi(data);

    const res = await result;

    dispatch(ingredientsSlice.actions._REGISTER_SUCCESS(res));

    data.onResponse(res);
  };
};
