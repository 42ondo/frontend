import styled from "@emotion/styled";
import { VStack, Text, Box } from "@chakra-ui/react";
import CustomTooltip from "./personal/CustomTooltip";

const Body = styled(Box)`
  width: 380px;
  min-height: 530px;
  background-color: white;
  min-width: 360px;
  padding: 40px 30px 10px;
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
  text-align: center;
  position: absolute;
  top: -40px;
  & > p {
    margin: auto;
  }
`;

function RankCard({ title, children, className, label }) {
  return (
    <VStack position="relative" className={className}>
      <Header className="rank-header">
        <CustomTooltip label={label}>
          <Text>{title}</Text>
        </CustomTooltip>
      </Header>
      <Body className="rank-body">{children}</Body>
    </VStack>
  );
}
export default RankCard;
