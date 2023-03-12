import { BASE_URL } from "../../utils/data";
import { checkResponse } from "../../utils/checkResponse";
import { Element } from "../../interfaces";

export async function postOrderApi(data: any) {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: data.map((element: Element) => element._id),
    }),
  });

  return checkResponse(response);
}
