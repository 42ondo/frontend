import styled from "@emotion/styled";
import { VStack, Text, Box } from "@chakra-ui/react";

const Body = styled(Box)`
  width: 380px;
  min-height: 530px;
  background-color: white;
  min-width: 360px;
  padding: 40px 30px 20px;
  border-radius: 80px;
  border: solid 15px var(--color-secondary);
  & > :first-child {
    color: var(--color-red);
  }
`;
const Header = styled(Box)`
  width: 320px;
  height: 100px;
  background-color: var(--color-primary);
  border: solid 3px var(--color-secondary);
  border-radius: 30px;

  font-family: "Bungee";
  font-size: 36px;
  display: flex;
  position: absolute;
  top: -40px;
  & > p {
    margin: auto;
  }
`;

function RankCard({ title, children, className }) {
  return (
    <VStack position="relative" className={className}>
      <Header className="rank-header">
        <Text>{title}</Text>
      </Header>
      <Body className="rank-body">{children}</Body>
    </VStack>
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
