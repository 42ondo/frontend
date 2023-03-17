import { Card, CardBody, VStack, Text, Box } from "@chakra-ui/react";
import UserItem from "./UserItem";
function RankCard() {
  const users = [
    {
      id: 1234,
      name: "cmoon",
      imgUrl:
        "https://static.wikia.nocookie.net/pokemon/images/5/52/피카츄_공식_일러스트.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko",
      ondo: 42,
    },
    {
      id: 1235,
      name: "dongyshi",
      imgUrl:
        "https://static.wikia.nocookie.net/pokemon/images/5/52/피카츄_공식_일러스트.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko",
      ondo: 42,
    },
    {
      id: 1236,
      name: "juahn",
      imgUrl:
        "https://static.wikia.nocookie.net/pokemon/images/5/52/피카츄_공식_일러스트.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko",
      ondo: 42,
    },
    {
      id: 1237,
      name: "sujikim",
      imgUrl:
        "https://static.wikia.nocookie.net/pokemon/images/5/52/피카츄_공식_일러스트.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko",
      ondo: 42,
    },
    {
      id: 1238,
      name: "tmp",
      imgUrl:
        "https://static.wikia.nocookie.net/pokemon/images/5/52/피카츄_공식_일러스트.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko",
      ondo: 42,
    },
    {
      id: 1238,
      name: "tmp",
      imgUrl:
        "https://static.wikia.nocookie.net/pokemon/images/5/52/피카츄_공식_일러스트.png/revision/latest/scale-to-width-down/200?cb=20170405000019&path-prefix=ko",
      ondo: 42,
    },
  ];
  const unit = "도";
  return (
    <>
      <Box p="5" alignItems="center" w="20%" borderRadius="10" bg="#C476D1">
        <VStack spacing={5}>
          <Card w="80%">
            <CardBody>
              <Text
                align="center"
                fontFamily={"Nanum"}
                fontWeight={"extrabold"}
                fontSize={"20px"}
              >
                Rank Card Title
              </Text>
            </CardBody>
          </Card>
          <Card w="100%">
            <CardBody>
              <Box>
                {users.map((x, i) => (
                  <UserItem idx={i} user={x} cnt={x.ondo} unit={unit} />
                ))}
              </Box>
            </CardBody>
          </Card>
        </VStack>
      </Box>
    </>
  );
}
export default RankCard;

/*
type user = {
 id: number,
 name : string,
 imgUrl : string,
 ondo : number
}
*/
