export async function resetPasswordApi({ password, code }: any) {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/password-reset/reset",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password, token: code }),
    }
  );

  if (!response.ok) {
    throw new Error("Error: there is an error");
  }

  return response.json();
}
