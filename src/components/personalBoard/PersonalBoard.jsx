import React from "react";
import styled from "@emotion/styled";
import PersonalTitle from "./PersonalTitle";
import Temperature from "./Temperature";
import Statistics from "./Statistics";
import { useGetUserName } from "../../apis/useGetUserName";

const PersonalBoardWrapper = styled.div`
  width: 1000px;
  height: 800px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50px;
  padding: 30px 20px;
`;

const Error = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const PersonalBoard = () => {
  const { login } = useGetUserName();

  return (
    <PersonalBoardWrapper>
      {login ? (
        <>
          <PersonalTitle />
          <Temperature />
          <Statistics />
        </>
      ) : (
        <Error>평가 정보를 찾을 수 없습니다</Error>
      )}
    </PersonalBoardWrapper>
  );
};

export default PersonalBoard;
