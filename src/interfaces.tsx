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
