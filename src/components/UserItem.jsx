import { Box } from "@chakra-ui/react";

function UserItem({ user, idx, cnt, unit }) {
  return (
    <Box>
      {idx + 1}위 {user.name} {cnt} {unit}
    </Box>
  );
}
export default UserItem;
