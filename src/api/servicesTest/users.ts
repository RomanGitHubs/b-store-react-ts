import { User } from '../../models/user';
import testUser from '../temp/user';

export const getUser = () => {
  return new Promise<User>((res) => {
    setTimeout(() => {
      res(testUser);
    }, 610);
  });
};
