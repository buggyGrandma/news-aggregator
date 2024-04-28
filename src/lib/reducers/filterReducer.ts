export interface IFilters {
  from: string;
  to: string;
  category: string;
  source: string;
  author: string;
}

const filterReducer = (_state: IFilters, action: IFilters): IFilters => {
  return action;
};

export default filterReducer;
