import React, { Dispatch } from "react";
import { IFilters } from "../reducers/filterReducer";

type TFilterContext = {
  filters: IFilters;
  FilterDispatch: Dispatch<IFilters>;
};

const FilterContext = React.createContext<TFilterContext>({} as TFilterContext);
export default FilterContext;
