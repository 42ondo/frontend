import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const Form = styled.form`
  width: 70%;
  max-width: 800px;
`;

function SearchBar({ flexOption, className }) {
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
    <Form onSubmit={handleSearch} className={className}>
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
