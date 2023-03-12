import { Dispatch } from "../../interfaces";
import { registerNewUserApi } from "../api/registerNewUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { registerNewUserThunkData } from "../../interfaces";

export const registerNewUserThunk = (data: registerNewUserThunkData) => {
  return async function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._REGISTER_REQUEST("Loading"));

    const result = await registerNewUserApi(data);

    const res = await result;

    dispatch(ingredientsSlice.actions._REGISTER_SUCCESS(res));

    data.onResponse(res);
  };
};
