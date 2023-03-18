import React from "react";
import styled from "@emotion/styled";
import StatisticsAverage from "components/personal/StatisticsAverage";
import StatisticsPersonal from "components/personal/StatisticsPersonal";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Statistics = () => {
  return (
    <Flex>
      <StatisticsPersonal />
      <StatisticsAverage />
    </Flex>
  );
};

export default Statistics;
