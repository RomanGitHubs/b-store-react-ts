export interface IRequestState {
  selectedGenres: string[]
  selectedMinPrice: number
  selectedMaxPrice: number
  selectedSort: 'price' | 'title' | 'author' | 'rating' | 'date'
  selectedOrder: 'ASC' | 'DESC'
  selectedQuery: string
  currentPage: number
  pageSize: number
  noLimit: boolean
}
