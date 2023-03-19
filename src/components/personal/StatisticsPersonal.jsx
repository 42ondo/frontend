import styled from "@emotion/styled";
import React from "react";
import { useGetEvalName } from "apis/useGetEvalName";
import { timeToString } from "utils/timeToString";
import { convertTimeString } from "utils/convertTime";
import {
  StatisticsText,
  StatisticsTitle,
} from "components/personal/StatisticsStyle";
import { roundNumber } from "utils/convertNumber";

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
  const { evalCnt, timeSpentAll, timeZoneLike, mostSubject, evalRatio } =
    useGetEvalName();
  return (
    <Wrapper>
      <Title>개 인</Title>
      <Text>
        평가 횟수 {evalCnt}회 <b>상위 {roundNumber(evalRatio, 2)}%</b>
      </Text>
      <Text>
        평가에 쏟은 시간 <b>총 {convertTimeString(timeSpentAll)}</b>
      </Text>
      <Text>
        최빈 평가 시간대 <b>{timeToString(timeZoneLike)}</b>
      </Text>
      <Text>
        최다 평가 서브젝트
        <b> {mostSubject}</b>
      </Text>
    </Wrapper>
  );
};

export default StatisticsPersonal;
