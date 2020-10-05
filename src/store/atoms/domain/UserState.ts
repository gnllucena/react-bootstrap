import { atom } from "recoil";
import User from "../../../domain/User";

const UserState = atom<User>({
  key: 'UserState',
  default: new User({
    Id: undefined,
    Name: '',
    Email: '',
    Bearer: '',
    Avatar: '',
    RememberMe: true
  })
});

export default UserState;