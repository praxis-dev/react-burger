export interface Response {
  ok: boolean;
  status: number;
  json: () => Promise<any>;
}

export interface UpdateUserThunkData {
  name: string;
  email: string;
  password: string;
}

export interface Dispatch {
  (arg0: { type: string; payload: any }): void;
}

export interface registerNewUserThunkData {
  name: string;
  email: string;
  password: string;
  onResponse: (res: any) => void;
}

export type ingredientsInStack = any[];

export interface authUserApiData {
  email: string;
  password: string;
}

export interface Element {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface postOrderApiData {
  data: Element[];
}

export interface resetPasswordData {
  password: string;
  code: string;
}
