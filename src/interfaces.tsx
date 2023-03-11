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
