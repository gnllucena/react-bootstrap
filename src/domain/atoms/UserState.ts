import { atom } from "recoil";
import { User } from "../models/User";

export const UserState = atom<User>({
  key: 'userState',
  default: new User({
    Id: undefined,
    Name: '',
    Email: '',
    Bearer: '',
    Avatar: '',
    RememberMe: true
  })
});