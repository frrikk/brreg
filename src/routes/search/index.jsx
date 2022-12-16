import SearchPage from "./search-page.jsx";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [result, setResult] = React.useState([]);

  const { data } = useQuery({
    queryKey: [`?navn=${searchTerm}`],
  });

  const handleSearchTermChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = () => {
    setResult(data);
  };

  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      setResult(data);
    }
  };

  return (
    <SearchPage
      result={result}
      searchTerm={searchTerm}
      onSearchTermChange={handleSearchTermChange}
      onSearch={handleSearch}
      onKeyUp={handleOnEnter}
    />
  );
};

export default Search;
