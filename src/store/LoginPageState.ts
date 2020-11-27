import { atom } from "recoil";
import User from "../domain/User";

export const LoginPageState = atom<User>({
  key: 'LoginPageState',
  default: new User({
    Id: undefined,
    Name: '',
    Email: '',
    Bearer: '',
    Avatar: '',
    RememberMe: true
  })
});