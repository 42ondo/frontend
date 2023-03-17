import React from "react";
import styled from "@emotion/styled";
import PersonalTitle from "./PersonalTitle";
import Temperature from "./Temperature";

const PersonalBoardWrapper = styled.div`
  width: 1000px;
  height: 800px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50px;
  padding: 30px 20px;

  --color-red: #dd5353;
  --color-grey: #bababa;
`;

const PersonalBoard = () => {
  return (
    <PersonalBoardWrapper>
      <PersonalTitle />
      <Temperature />
    </PersonalBoardWrapper>
  );
};

export default PersonalBoard;
