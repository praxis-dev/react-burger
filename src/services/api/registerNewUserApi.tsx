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
  const response = await fetch(
    "https://norma.nomoreparties.space/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password, name: name }),
    }
  );
  if (!response.ok) {
    throw new Error("Error: there is an error");
  }
  return response;
}
