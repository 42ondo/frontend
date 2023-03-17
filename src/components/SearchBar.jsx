import { useState } from "react";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <InputGroup w={"50%"}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        bg={"white"}
        type="text"
        placeholder="Intra 42 닉네임을 입력하세요."
        value={query}
        onChange={handleInputChange}
      />
      <Button colorScheme="purple" onClick={handleSearch} ml={"10px"}>
        검색
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
