import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import RankCard from "../components/RankCard";
import SearchBar from "../components/SearchBarTotal";
import { ReactComponent as Thermo } from "../assets/Thermo.svg";
function TotalPage() {
  return (
    <Flex bg={"#F8E6FB"} h={"full"}>
      <VStack
        alignItems={"center"}
        w={"100%"}
        justifyContent={"center"}
        spacing={"4%"}
      >
        <HStack>
          <Box as={Thermo} w={"45px"} h={"45px"} />
          <Box
            fontFamily={"Nanum"}
            fontWeight={"extraBold"}
            fontSize={"50px"}
            color={"#C476D1"}
          >
            42ONDO
          </Box>
        </HStack>
        <SearchBar />
        <Box w={"100%"}>
          <HStack spacing={"10%"} justifyContent={"center"}>
            <RankCard />
            <RankCard />
            <RankCard />
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
}

export default TotalPage;
