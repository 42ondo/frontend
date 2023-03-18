import React from "react";
import styled from "@emotion/styled";
import BubbleImg from "assets/images/bubble.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
  background-image: url(${BubbleImg});

  background-repeat: no-repeat;
  background-size: 120px;
  padding: 15px;
  color: var(--color-red);
`;

const Text = styled.p`
  white-space: pre-line;
`;

const Degree = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const DegreeBubble = ({ className, text, degree }) => {
  return (
    <Wrapper className={className}>
      <Text>{text}</Text>
      <Degree>{degree}°C</Degree>
    </Wrapper>
  );
};

export default DegreeBubble;
