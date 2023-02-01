export async function GetIngredients() {
  const response = await fetch(
    "https://norma.nomoreparties.space/api/ingredients"
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}
