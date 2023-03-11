import { Response } from "../interfaces";

export function checkResponse(res: Response) {
  if (res.ok) {
    console.log(res);
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
