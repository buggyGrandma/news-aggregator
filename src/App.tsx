import { useReducer } from "react";
import CardsContainer from "./components/CardsContainer";
import Layout from "./Layout";
import FilterContext from "./lib/contexts/filterContext";
import SearchContext from "./lib/contexts/searchContext";
import filterReducer from "./lib/reducers/filterReducer";
import searchReducer from "./lib/reducers/searchReducer";

function App() {
  const [value, dispatch] = useReducer(searchReducer, "a");
  const [filters, FilterDispatch] = useReducer(filterReducer, {
    from: "",
    to: "",
    category: "",
    source: "",
  });
  return (
    <SearchContext.Provider value={{ value, dispatch }}>
      <FilterContext.Provider value={{ filters, FilterDispatch }}>
        <Layout>
          <CardsContainer />
        </Layout>
      </FilterContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
