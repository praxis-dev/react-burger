import { BASE_URL } from "../../utils/data";
import { checkResponse } from "../../utils/checkResponse";

interface RegisterNewUserRequest {
  name: string;
  email: string;
  password: string;
}

export async function registerNewUserApi({
  name,
  email,
  password,
}: RegisterNewUserRequest) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password, name: name }),
  });

  return checkResponse(response);
}
