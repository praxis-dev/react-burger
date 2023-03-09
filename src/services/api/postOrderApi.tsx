import { BASE_URL } from "../../utils/data";

export async function postOrderApi(data: any) {
  const response = fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: data.map((element: any) => element._id),
    }),
  });

  return response;
}
