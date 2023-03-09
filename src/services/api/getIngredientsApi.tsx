import { BASE_URL } from "../../utils/data";

export async function getIngredientsApi() {
  const response = await fetch(`${BASE_URL}/ingredients`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}
