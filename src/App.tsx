import { useReducer } from "react";
import CardsContainer from "./components/CardsContainer";
import Layout from "./Layout";
import searchReducer from "./lib/reducers/searchReducer";
import SearchContext from "./lib/contexts/searchContext";

function App() {
  const [value, dispatch] = useReducer(searchReducer, "a");
  return (
    <SearchContext.Provider value={{ value, dispatch }}>
      <Layout>
        <CardsContainer />
      </Layout>
    </SearchContext.Provider>
  );
}

export default App;
