import SearchPage from "./search-page.jsx";
import { mock } from "../../mock.js";
import * as React from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [result, setResult] = React.useState([]);

  const { enheter } = mock;

  const handleSearchTermChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = () => {
    let foundUnit = enheter.filter((enhet) =>
      enhet.navn.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundUnit) {
      setResult(foundUnit);
    }

    if (searchTerm.length === 0) {
      setResult([]);
    }

    return [];
  };

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
