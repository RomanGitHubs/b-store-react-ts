import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { BookModel } from '../../models/book';
import testBooks from '../temp/books';

export const getBooks = () => {
  return new Promise<BookModel[]>((res) => {
    setTimeout(() => {
      res(testBooks);
    }, 610);
  });
};
