import styled from "@emotion/styled";
import React from "react";
import { evalName } from "../../mockApi/evalName";
import { StatisticsText, StatisticsTitle } from "./StatisticsStyle";
import { timeToString } from "../../utils/timeToString";

const Wrapper = styled.div`
  width: 500px;
  margin: 0 20px;
`;

const Title = styled(StatisticsTitle)`
  font-size: 24px;
`;

const Text = styled(StatisticsText)`
  font-size: 28px;
  margin-left: 30px;
  > b {
    color: var(--color-red);
  }
`;

const StatisticsPersonal = () => {
  const statistics = evalName();

  return (
    <Wrapper>
      <Title>주간 내꺼</Title>
      <Text>
        평가 횟수 {statistics.evalCnt}회 <b>상위 {statistics.evalRatio}%</b>
      </Text>
      <Text>
        평가에 쏟은 시간 <b>총 {statistics.timeSpentAll}시간</b>
      </Text>
      <Text>
        최빈 평가 시간대 <b>{timeToString(statistics.timeZoneLike)}</b>
      </Text>
      <Text>
        최다 평가 서브젝트
        <b> {statistics.mostSubject}</b>
      </Text>
    </Wrapper>
  );
};

export default StatisticsPersonal;
