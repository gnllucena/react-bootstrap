import { atom } from "recoil";
import User from "../../../domain/User";

const StockState = atom<User>({
  key: 'StockState',
  default: new User({
    Id: undefined,
    Name: '',
    Email: '',
    Bearer: '',
    Avatar: '',
    RememberMe: true
  })
});

export default StockState;