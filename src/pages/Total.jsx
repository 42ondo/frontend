import styled from "@emotion/styled";
import { Flex, HStack } from "@chakra-ui/react";
import SearchBar from "components/SearchBar";
import Logo from "components/Logo";
import RankTemperature from "components/total/RankTemperature";
import RankWord from "components/total/RankWord";
import RankEvaluation from "components/total/RankEvaluation";

const Ranks = styled(HStack)`
  .spinner {
    margin-top: 160px;
  }
`;

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
      <Ranks w="100%" spacing="10%" justifyContent="center" marginTop="100px">
        <RankTemperature />
        <RankWord />
        <RankEvaluation />
      </Ranks>
    </Flex>
  );
}

export default TotalPage;
