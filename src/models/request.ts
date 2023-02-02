import { PaginationModel } from './pagination';

export interface IRequestState {
  selectedGenres: number[],
  selectedMinPrice: number,
  selectedMaxPrice: number,
  selectedSort: string,
  selectedOrder: 'ASC' | 'DESC',
  selectedQuery: string,
  selectedPagination: PaginationModel,
}
