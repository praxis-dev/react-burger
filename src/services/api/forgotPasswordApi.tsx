import { BASE_URL } from "../../utils/data";

export async function forgotPasswordApi(email: string) {
  const response = await fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Error: there is an error");
  }

  return response.json();
}
