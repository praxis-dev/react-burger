import { BASE_URL } from "../../utils/data";

import { getCookie } from "../../utils/cookies/getCookie";

export const updateUserDataApi = (data: any) => {
  const accessToken = getCookie("accessToken");
  return fetch(`${BASE_URL}/auth/user`, {
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
