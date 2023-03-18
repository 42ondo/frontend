import styled from "@emotion/styled";
import React from "react";
import { useGetEvalAverage } from "../../apis/useGetEvalAverage";
import { timeToString } from "../../utils/timeToString";
import { StatisticsText, StatisticsTitle } from "./StatisticsStyle";
import { convertTimeString } from "../../utils/convertTime";

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
