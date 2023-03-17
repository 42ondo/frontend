import styled from "@emotion/styled";
import React from "react";
import DegreeBubble from "./DegreeBubble";

const Filled = styled.div`
  width: ${(props) => props.degree * 8}px;
  height: 48px;
  background-color: var(--color-red);
  opacity: 0.8;
  border-radius: 50px 10px 10px 50px;
  position: absolute;
  top: 5px;
  left: 10px;
`;

const Bubble = styled(DegreeBubble)`
  color: var(--color-red);
  position: absolute;
  top: -120px;
  left: ${(props) => props.degree * 8 - 28}px;
`;
const Wrapper = styled.div``;

const TemperatureFill = ({ className, degree, text }) => {
  return (
    <Wrapper className={className}>
      <Filled degree={degree} className="fill" />
      <Bubble id="bubble" text={text} degree={degree} className="bubble" />
    </Wrapper>
  );
};

export default TemperatureFill;
