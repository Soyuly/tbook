import { atom } from "recoil";

export const signupInfoState = atom({
  key: "signupInfoState",
  default: {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  },
});
