import { BASE_URL } from "../../utils/data";
import { checkResponse } from "../../utils/checkResponse";

export async function forgotPasswordApi(email: string) {
  const response = await fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return checkResponse(response);
}
