import styled from "@emotion/styled";
import React from "react";
import { ondoAverage } from "../../mockApi/ondoAverage";
import TemperatureFill from "./TemperatureFill";
import BubbleReverse from "../../assets/images/bubble_reverse_grey.svg";
const AverageFill = styled(TemperatureFill)`
  & .fill {
    background-color: black;
    opacity: 0.3;
    height: 40px;
    top: 9px;
    left: 10px;
  }
  & .bubble {
    top: 60px;
    background-image: url(${BubbleReverse});
    padding-top: 48px;
    left: ${(props) => props.degree * 8 - 70}px;
    color: var(--color-grey);
  }
`;
const TemperatureAverage = ({ text }) => {
  const degree = ondoAverage();
  return <AverageFill degree={degree} text={text} />;
};

export default TemperatureAverage;
