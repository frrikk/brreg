import SearchPage from "./search-page.jsx";
import { mock } from "../../mock.js";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [term, setTerm] = React.useState("");

  const { data, isLoading: loading } = useQuery({
    queryKey: [`?navn=${term}`],
  });

  const handleSearchTermChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = () => {
    setTerm(searchTerm);
    setResult([data]);

    // let foundUnit = enheter.filter((enhet) =>
    //   enhet.navn.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    //
    // if (foundUnit) {
    //   setResult(foundUnit);
    // }
    //
    // if (searchTerm.length === 0) {
    //   setResult([]);
    // }
    //
    // return [];
  };

  if (data) {
    console.log("data", data);
  }

  return (
    <SearchPage
      units={result}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTermChange}
      onSearch={handleSearch}
    />
  );
};

export default Search;
