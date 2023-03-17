import styled from "@emotion/styled";
import React from "react";
import StatisticsAverage from "./StatisticsAverage";
import StatisticsPersonal from "./StatisticsPersonal";

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
