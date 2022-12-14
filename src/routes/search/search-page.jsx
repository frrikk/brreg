import { Label } from "../../components/label";
import { Input } from "../../components/input.jsx";
import { Button } from "../../components/button.jsx";

const SearchPage = (props) => {
  const { units, searchTerm, onSearchTermChange, onSearch } = props;

  return (
    <div>
      <SearchInput
        searhTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onSearch={onSearch}
      />
      {units &&
        units.map((unit, i) => <SearchResultCard key={i} data={unit.navn} />)}
    </div>
  );
};

const SearchResultCard = (props) => {
  const { data } = props;
  return <div>{data}</div>;
};

const SearchInput = (props) => {
  const { searchTerm, onSearchTermChange, onSearch } = props;
  return (
    <div>
      <Label htmlFor="search" labelText="Søk etter enheter" />
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          value={searchTerm}
          onChange={onSearchTermChange}
          id="search"
          name="search"
          placeholder="Ola Nordmann AS"
        />
        <Button text="Søk" onClick={onSearch} />
      </div>
    </div>
  );
};

export default SearchPage;
