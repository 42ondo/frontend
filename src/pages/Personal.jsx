import PersonalBoard from "../components/personalBoard/PersonalBoard";
import { Box, Flex, HStack } from "@chakra-ui/react";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import styled from "@emotion/styled";
import MostUsed from "../components/personal/MostUsed";

const LogoLeft = styled(Logo)`
  margin: 30px;
`;
const SearchBarCenter = styled(SearchBar)`
  margin: auto;
  flex: 1 0 300px;
`;

const PersonalContents = styled(HStack)`
  .board {
    flex: 2 0 800px;
    margin-right: 40px;
  }
  .most-used {
    flex: 0 0 400px;
    height: 100%;
  }
  .rank-body {
    height: 100%;
  }
`;
function PersonalPage() {
  return (
    <Flex flexDirection="column" h="full" w="full" padding="30px">
      <HStack spacing="20px" height="100px" mb="30px">
        <LogoLeft color="var(--color-secondary)" to="/total" />
        <SearchBarCenter />
      </HStack>
      <PersonalContents alignItems="center" flexGrow="1">
        <PersonalBoard />
        <MostUsed />
      </PersonalContents>
    </Flex>
  );
}

export default PersonalPage;
