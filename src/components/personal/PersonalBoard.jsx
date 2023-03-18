import React from "react";
import styled from "@emotion/styled";
import { useGetUserName } from "apis/useGetUserName";
import PersonalTitle from "components/personal/PersonalTitle";
import Temperature from "components/Temperature";
import Statistics from "components/personal/Statistics";

const PersonalBoardWrapper = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const PersonalBoard = ({ className }) => {
  const { login } = useGetUserName();

  return (
    <PersonalBoardWrapper className={`board ${className}`}>
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
