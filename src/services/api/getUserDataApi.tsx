import { BASE_URL } from "../../utils/data";
import { getCookie } from "../../utils/cookies/getCookie";
import { checkResponse } from "../../utils/checkResponse";

export async function getUserDataApi() {
  const accessToken = getCookie("accessToken");
  const response = await fetch(`${BASE_URL}/auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
  });

  return checkResponse(response);
}
