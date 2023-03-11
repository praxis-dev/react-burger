export interface Response {
  ok: boolean;
  status: number;
  json: () => Promise<any>;
}

export interface updateUserThunkData {
  name: string;
  email: string;
  password: string;
}

export interface dispatch {
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
