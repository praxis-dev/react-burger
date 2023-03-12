import { BASE_URL } from "../../utils/data";
import { getCookie } from "../../utils/cookies/getCookie";
import { checkResponse } from "../../utils/checkResponse";
import { UpdateUserThunkData } from "../../interfaces";

export async function updateUserDataApi(data: UpdateUserThunkData) {
  const accessToken = getCookie("accessToken");
  const response = await fetch(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    body: JSON.stringify(data),
  });

  return checkResponse(response);
}
