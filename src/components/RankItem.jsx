import styled from "@emotion/styled";
import { Box, HStack } from "@chakra-ui/react";
import ConditionalLink from "components/ConditionalLink";

const Rank = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  vertical-align: baseline;

  & > .rank-num {
    font-size: 32px;
    margin-bottom: 6px;
  }
  & > .rank-num-unit {
    margin-right: 20px;
  }
  & > .rank-text {
    flex: 1 0 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

function RankItem({ rankText, rankNum, rankCount, countUnit, isLink, to }) {
  return (
    <ConditionalLink isLink={isLink} to={to}>
      <Box marginY="40px" fontWeight="bold" fontSize="20px">
        <HStack justifyContent="space-between">
          <Rank>
            <span className="rank-num" size="32px">
              {rankNum}
            </span>
            <span className="rank-num-unit">위</span>
            <span className="rank-text">{rankText}</span>
            <span>{`(${rankCount} ${countUnit})`}</span>
          </Rank>
        </HStack>
      </Box>
    </ConditionalLink>
  );
}
export default RankItem;
