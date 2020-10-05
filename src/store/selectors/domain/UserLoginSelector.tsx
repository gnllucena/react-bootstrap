import axios from 'axios';
import { selector, DefaultValue } from 'recoil';
import UserState from '../../atoms/domain/UserState';
import User from '../../../domain/User';

const UserLoginSelector = selector<User>({
  key: 'UserLoginSelector',
  get: ({ get }) => {
    return get(UserState);
  },
  set: async ({ set }, newUser: User | DefaultValue) => {
    const user = newUser as User;

    const response = await axios.get<User>(`${process.env.URL_API_STOCK}login`);

    const key = 'user';

    const value = JSON.stringify(response.data);

    if (user.RememberMe) {
      localStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }

    set(UserState, response.data);
  }
});

export default UserLoginSelector;
