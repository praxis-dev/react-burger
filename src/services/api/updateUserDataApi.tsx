import { getCookie } from "../../utils/cookies/getCookie";

export const updateUserDataApi = (data: any) => {
  const accessToken = getCookie("accessToken");
  return fetch("https://norma.nomoreparties.space/api/auth/user", {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
