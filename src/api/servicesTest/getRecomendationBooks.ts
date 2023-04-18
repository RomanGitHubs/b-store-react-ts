import { BookModel } from '../../models/book';
import testBooks from '../temp/books';

export const getRecomendationBooks = (id: string | undefined) => {
  let tempArray: BookModel[] = [];

  const booksCopy = [...testBooks];

  booksCopy.splice(booksCopy.indexOf(booksCopy
    .filter((item) => item.bookId === id)[0]), 1);

  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * (booksCopy.length - 4));

    tempArray = [...tempArray, booksCopy[randomNum]];

    booksCopy.splice(booksCopy.indexOf(booksCopy
      .filter((item) => item.bookId === booksCopy[randomNum].bookId)[0]), 1);
  }
  return new Promise<BookModel[]>((res) => {
    setTimeout(() => {
      res(tempArray);
    }, 610);
  });
};
