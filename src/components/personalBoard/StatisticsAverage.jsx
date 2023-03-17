import styled from "@emotion/styled";
import React from "react";
import { evalAverage } from "../../mockApi/evalAverage";
import { timeToString } from "../../utils/timeToString";
import { StatisticsText, StatisticsTitle } from "./StatisticsStyle";

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
  const statistics = evalAverage();
  return (
    <Wrapper>
      <Title>애들꺼</Title>
      <Text>{statistics.evalCnt}</Text>
      <Text>{statistics.timeSpentAll}시간</Text>
      <Text>{timeToString(statistics.timeZoneLike)}</Text>
      <Text>{statistics.mostSubject}</Text>
    </Wrapper>
  );
};

export default StatisticsAverage;
