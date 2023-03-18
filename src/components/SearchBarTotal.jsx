import { useRef, useTransition, startTransition } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function SearchBarTotal() {
  const nameInput = useRef(null);
  const navigate = useNavigate();
  const [isPending] = useTransition();

  const handleSearch = () => {
    startTransition(() => {
      // 비동기 로직 실행
      const nickname = nameInput.current.value;
      navigate(`/personal/${nickname}`);
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
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
          defaultValue=""
          ref={nameInput}
          h={"60px"}
          borderRadius={"30px"}
          fontSize={"xl"}
          onKeyDown={handleKeyDown}
          disabled={isPending}
        />
        <Button
          colorScheme="purple"
          onClick={handleSearch}
          ml={4}
          w={"80px"}
          h={"60px"}
          borderRadius={"25px"}
          fontSize={"20px"}
          disabled={isPending}
        >
          검색
        </Button>
      </InputGroup>
    </VStack>
  );
}

export default SearchBarTotal;
