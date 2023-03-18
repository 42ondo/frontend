import React from "react";
import styled from "@emotion/styled";
import { useGetEvalAverage } from "apis/useGetEvalAverage";
import { timeToString } from "utils/timeToString";
import { convertTimeString } from "utils/convertTime";
import { StatisticsText, StatisticsTitle } from "components/personal/StatisticsStyle";

const Wrapper = styled.div`
  width: 150px;
  text-align: center;
  color: var(--color-grey);
  && > * {
    font-size: 20px;
  }
`;
const Title = styled(StatisticsTitle)``;
const Text = styled(StatisticsText)``;

const StatisticsAverage = () => {
  const { evalCnt, timeSpentAll, timeZoneLike, mostSubject } =
    useGetEvalAverage();

  return (
    <Wrapper>
      <Title>전 체</Title>
      <Text>{evalCnt?.toLocaleString()}회</Text>
      <Text>{convertTimeString(timeSpentAll)}</Text>
      <Text>{timeToString(timeZoneLike)}</Text>
      <Text>{mostSubject}</Text>
    </Wrapper>
  );
};

export default StatisticsAverage;
