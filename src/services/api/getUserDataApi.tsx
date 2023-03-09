import { BASE_URL } from "../../utils/data";
import { getCookie } from "../../utils/cookies/getCookie";

export const getUserDataApi = () => {
  const accessToken = getCookie("accessToken");
  return fetch(`${BASE_URL}/auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
