export async function logoutUserApi() {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // send refresh token
      body: JSON.stringify({ token: "refreshToken" }),
    }
  );
  if (!response.ok) {
    throw new Error("Error: there is an error");
  }
  return response;
}
