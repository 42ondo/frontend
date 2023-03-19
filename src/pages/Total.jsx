import { Flex, HStack } from "@chakra-ui/react";
import RankCard from "components/RankCard";
import SearchBar from "components/SearchBar";
import Logo from "components/Logo";
import RankTemperature from "components/total/RankTemperature";
import RankWord from "components/total/RankWord";
import RankEvaluation from "components/total/RankEvaluation";

function TotalPage() {
  return (
    <Flex
      w="full"
      h="full"
      paddingY="50px"
      spacing="10%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Logo color="var(--color-secondary)" flexOption=" 0 0 200px" />
      <SearchBar />
      <HStack w="100%" spacing="10%" justifyContent="center" marginTop="100px">
        <RankTemperature />
        <RankWord />
        <RankEvaluation />
      </HStack>
    </Flex>
  );
}

export default TotalPage;
