import { BASE_URL } from "../../utils/data";
import { checkResponse } from "../../utils/checkResponse";

export async function resetPasswordApi({ password, code }: any) {
  const response = await fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, token: code }),
  });

  return checkResponse(response);
}
