import React from "react";
import styled from "@emotion/styled";
import { useGetUserName } from "apis/useGetUserName";
import TemperatureBody from "assets/images/temperature_body.svg";
import TemperatureFill from "components/TemperatureFill";
import TemperatureAverage from "components/personal/TemperatureAverage";

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
  const { ondo: degree } = useGetUserName();

  return (
    <Wrapper>
      <Fill degree={degree} text="현재" />
      <TemperatureAverage text="평균" />
    </Wrapper>
  );
};

export default Temperature;
