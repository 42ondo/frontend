import { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBarTotal({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <VStack w={"50%"} alignItems={"center"}>
      <InputGroup pl={"5px"}>
        <InputLeftElement
          h="100%"
          alignItems="center"
          pointerEvents="none"
          ml={"10px"}
        >
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          bg={"white"}
          type="text"
          placeholder="Intra 42 닉네임을 입력하세요."
          value={query}
          h={"60px"}
          onChange={handleInputChange}
          borderRadius={"30px"}
        />
        <Button
          colorScheme="purple"
          onClick={handleSearch}
          ml={4}
          w={"80px"}
          h={"60px"}
          borderRadius={"25px"}
          fontSize={"20px"}
        >
          검색
        </Button>
      </InputGroup>
    </VStack>
  );
}

export default SearchBarTotal;
