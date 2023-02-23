export async function postOrderApi(data: any) {
  const response = fetch("https://norma.nomoreparties.space/api/orders", {
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
