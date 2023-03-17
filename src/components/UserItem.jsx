import { Box, HStack, Text } from "@chakra-ui/react";

function UserItem({ user, idx, cnt, unit }) {
  return (
    <Box mt={"5%"} mb={"5%"}>
      <HStack justifyContent="space-between">
        <Box>
          <Text fontFamily={"Nanum"} fontWeight={"normal"}>
            {idx + 1}위 {user.name} {cnt} {unit}
          </Text>
        </Box>

        <Box
          w="25px"
          h="25px"
          borderRadius="50%"
          bg={"gray"}
          backgroundImage={`url(${user.imgUrl})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
      </HStack>
    </Box>
  );
}
export default UserItem;
