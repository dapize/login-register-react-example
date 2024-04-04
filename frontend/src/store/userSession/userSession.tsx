import { IUserData, IUserSession } from "./userSession.d";
import { create } from "zustand";

const userDataInit: IUserData = {
  name: "",
  email: "",
  role: "visitor",
  tokenSession: "",
};

export const useUserSession = create<IUserSession>()((set) => ({
  ...userDataInit,
  update: (data: IUserData) => set(data),
  reset: () => set({ ...userDataInit }),
}));
