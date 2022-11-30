export interface IResponse<D> {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: D;
}
