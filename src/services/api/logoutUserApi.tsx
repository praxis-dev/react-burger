import { BASE_URL } from "../../utils/data";
import { getCookie } from "../../utils/cookies/getCookie";
import { checkResponse } from "../../utils/checkResponse";

export async function logoutUserApi() {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getCookie("token"),
    }),
  });

  return checkResponse(response);
}
