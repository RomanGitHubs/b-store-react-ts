import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { GenreModel } from '../../models/genre';

const bookAxios = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getGenres = (): Promise<AxiosResponse<GenreModel[]>> => {
  return bookAxios.get('/genres');
};
