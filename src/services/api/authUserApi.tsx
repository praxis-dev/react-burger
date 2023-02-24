export async function authUserApi({ email, password }: any) {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Error: there is an error");
  }
  console.log(response);

  return response;
}
