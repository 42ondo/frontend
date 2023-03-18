import { useRef, useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Form = styled.form`
  width: 70%;
  max-width: 800px;
`;

function SearchBar() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/personal/${query}`);
  };

  return (
    <Form onSubmit={handleSearch}>
      <InputGroup w={"100%"}>
        <Input
          height={"50px"}
          bg={"white"}
          type="text"
          placeholder="SEARCH INTRA ID"
          value={query}
          ref={inputRef}
          onChange={handleInputChange}
        />
        <InputRightElement pointerEvents="none" height={"50px"}>
          <SearchIcon color="gray.400" />
        </InputRightElement>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
