export async function forgotPasswordApi(email: string) {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/password-reset",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  if (!response.ok) {
    throw new Error("Error: there is an error");
  }

  return response.json();
}
