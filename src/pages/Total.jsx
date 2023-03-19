import React, { Suspense } from "react";
import { Flex, HStack } from "@chakra-ui/react";
import SearchBar from "components/SearchBar";
import Logo from "components/Logo";
import RankWord from "components/total/RankWord";
import RankEvaluation from "components/total/RankEvaluation";
import RankCard from "components/RankCard";
import SuspenseSpinner from "components/SuspenseSpinner";
const RankTemperature = React.lazy(() =>
  import("components/total/RankTemperature")
);

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
        <RankCard title="Temperature RANK">
          <SuspenseSpinner>
            <RankTemperature />
          </SuspenseSpinner>
        </RankCard>
        <RankWord />
        <RankCard title="Evaluation RANK">
          <RankEvaluation />
        </RankCard>
      </HStack>
    </Flex>
  );
}

export default TotalPage;
