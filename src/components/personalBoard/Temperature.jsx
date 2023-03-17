import styled from "@emotion/styled";
import React, { Suspense } from "react";
import TemperatureBody from "../../assets/images/temperature_body.svg";
import { userName } from "../../mockApi/userName";
import TemperatureFill from "./TemperatureFill";
const TemperatureAverage = React.lazy(() => import("./TemperatureAverage"));

const Wrapper = styled.div`
  position: relative;
  background-image: url(${TemperatureBody});
  background-repeat: no-repeat;
  background-size: 700px;
  width: 700px;
  height: 200px;
  margin: 130px auto 0;
`;

const Fill = styled(TemperatureFill)``;

const Temperature = () => {
  const { ondo: degree } = userName();
  return (
    <Wrapper>
      <Fill degree={degree} text="현재" />
      {/* <Suspense> */}
      <TemperatureAverage text="평균" />
      {/* </Suspense> */}
    </Wrapper>
  );
};

export default Temperature;
