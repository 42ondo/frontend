import styled from "@emotion/styled";
import { Box, HStack } from "@chakra-ui/react";

const Rank = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  vertical-align: baseline;

  & > .rank-num {
    font-size: 32px;
    margin-bottom: 8px;
  }
  & > .rank-num-unit {
    margin-right: 20px;
  }
  & > .rank-text {
    flex: 1 0 40px;
  }
`;

function RankItem({ rankText, rankNum, rankCount, countUnit, imgUrl }) {
  return (
    <Box marginY="20px" fontWeight="bold" fontSize="20px">
      <HStack justifyContent="space-between">
        <Rank>
          <span className="rank-num" size="32px">
            {rankNum}
          </span>
          <span className="rank-num-unit">위</span>
          <span className="rank-text">{rankText}</span>
          <span>{`(${rankCount} ${countUnit})`}</span>
        </Rank>
        {imgUrl ? (
          <Box
            w="25px"
            h="25px"
            borderRadius="50%"
            bg={"gray"}
            backgroundImage={`url(${imgUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
          />
        ) : null}
      </HStack>
    </Box>
  );
}
export default RankItem;
