import { UserModel } from '../../models/user';
import testUser from '../temp/user';

export const getUser = () => {
  return new Promise<UserModel>((res) => {
    setTimeout(() => {
      res(testUser);
    }, 610);
  });
};
