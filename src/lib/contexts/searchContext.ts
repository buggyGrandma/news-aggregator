import React, { Dispatch } from "react";

type TSearchContext = {
  value: string;
  dispatch: Dispatch<string>;
};

const SearchContext = React.createContext<TSearchContext>({} as TSearchContext);
export default SearchContext;
