import { BASE_URL } from "../../utils/data";
import { checkResponse } from "../../utils/checkResponse";

export async function authUserApi({ email, password }: any) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return checkResponse(response);
}
