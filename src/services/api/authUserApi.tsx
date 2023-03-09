import { BASE_URL } from "../../utils/data";

export async function authUserApi({ email, password }: any) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error: there is an error");
  }
  console.log(response);

  return response;
}
