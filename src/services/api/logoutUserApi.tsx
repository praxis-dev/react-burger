import { getCookie } from "../../utils/cookies/getCookie";

export async function logoutUserApi() {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("token"),
      }),
    }
  );
  return response;
}
