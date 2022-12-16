import { Label } from "../../components/label";
import { EmptyState } from "../../components/empty-state.jsx";
import { Input } from "../../components/input.jsx";
import { Button } from "../../components/button.jsx";
import { Card } from "../../components/card";
import { Text } from "../../components/text.jsx";
import { Heading } from "../../components/heading.jsx";
import { VerticalSpacer } from "../../components/vertical-spacer";

const SearchPage = (props) => {
  const { result, searchTerm, onSearchTermChange, onSearch, onKeyUp, loading } =
    props;

  if (searchTerm.length === 0) {
    return (
      <div>
        <Heading type="h1">Enhetsregisteret</Heading>
        <VerticalSpacer />
        <SearchInput
          searhTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          onSearch={onSearch}
          onKeyUp={onKeyUp}
          loading={loading}
        />
        <EmptyState>Send inn et søk over for å se enheter</EmptyState>;
      </div>
    );
  }

  return (
    <div>
      <Heading type="h1">Enhetsregisteret</Heading>
      <VerticalSpacer />
      <SearchInput
        searhTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onSearch={onSearch}
        onKeyUp={onKeyUp}
        loading={loading}
      />
      {result?._embedded?.enheter.map((unit) => {
        const { navn, organisasjonsnummer } = unit;
        return (
          <Card key={organisasjonsnummer}>
            <Text>{navn}</Text>
            <Text>{organisasjonsnummer}</Text>
          </Card>
        );
      })}
      {searchTerm.length === 0 && <EmptyState />}
    </div>
  );
};

const SearchInput = (props) => {
  const { searchTerm, onSearchTermChange, onSearch, onKeyUp } = props;
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
          onKeyUp={onKeyUp}
        />
        <Button text="Søk" onClick={onSearch} />
      </div>
    </div>
  );
};

export default SearchPage;
