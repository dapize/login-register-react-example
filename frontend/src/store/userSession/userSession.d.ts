export type TUserRole = "visitor" | "registered";

export interface IUserData {
  name: string;
  email: string;
  role: TUserRole;
  tokenSession: string;
}

export interface IUserSession extends IUserData {
  update: (data: IUserData) => void;
  reset: () => void;
}
