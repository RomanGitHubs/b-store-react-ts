import { GenreModel } from '../../models/genre';
import testGenres from '../temp/genres';

export const getGenres = () => {
  return new Promise<GenreModel[]>((res) => {
    setTimeout(() => {
      res(testGenres);
    }, 610);
  });
};
