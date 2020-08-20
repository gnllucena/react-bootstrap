import axios from 'axios';
import { selector, DefaultValue } from "recoil";
import { UserState } from "../../atoms/UserState";
import { User } from "../../models/User";

export const UserLoginSelector = selector<User>({
  key: 'UserLoginSelector',
  get: ({get}) => {
    return get(UserState);
  },
  // https://github.com/facebookexperimental/Recoil/issues/171#issuecomment-634212164
  set: async ({set}, newUser: User | DefaultValue) => {
    let user = newUser as User;

    let response = await axios.get<User>(process.env.URL_API_STOCK + 'login');

    let key = 'user';

    let value = JSON.stringify(response.data);

    if (user.RememberMe) {
      localStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }

    set(UserState, response.data);
  }
});