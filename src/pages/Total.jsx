import { Flex, HStack } from "@chakra-ui/react";
import RankCard from "../components/RankCard";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";

function TotalPage() {
  return (
    <Flex
      bg="#F8E6FB"
      w="full"
      h="full"
      paddingY="50px"
      spacing="10%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Logo color="#C476D1" flexOption=" 0 0 200px" />
      <SearchBar />
      <HStack w="100%" spacing="10%" justifyContent="center" marginTop="100px">
        <RankCard />
        <RankCard />
        <RankCard />
      </HStack>
    </Flex>
  );
}

export default TotalPage;
