export interface IRequestState {
  selectedGenres: string[],
  selectedMinPrice: number,
  selectedMaxPrice: number,
  selectedSort: string,
  selectedOrder: 'ASC' | 'DESC',
  selectedQuery: string,
  currentPage: number,
  pageSize: number,
}
