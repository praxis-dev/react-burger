import { BASE_URL } from "../../utils/data";
import { checkResponse } from "../../utils/checkResponse";

export async function getIngredientsApi() {
  const response = await fetch(`${BASE_URL}/ingredients`);

  return checkResponse(response);
}
