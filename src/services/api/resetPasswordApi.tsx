import { BASE_URL } from "../../utils/data";
import { checkResponse } from "../../utils/checkResponse";
import { resetPasswordData } from "../../interfaces";

export async function resetPasswordApi({ password, code }: resetPasswordData) {
  const response = await fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, token: code }),
  });

  return checkResponse(response);
}
