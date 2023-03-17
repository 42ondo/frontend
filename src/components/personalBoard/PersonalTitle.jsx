import React from "react";
import styled from "@emotion/styled";
import { userName } from "../../mockApi/userName";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 40px;
  font-size: 60px;
  font-weight: bold;
  & :first-child {
    color: var(--color-red);
  }
  & :last-child {
    font-size: 48px;
    margin-left: 10px;
  }
  > * {
    margin-left: 20px;
  }
`;

const PersonalTitle = () => {
  const { title, login } = userName();
  return (
    <Header>
      <span>{title}</span>
      <span>{login?.toUpperCase()}</span>
      <span>의 평가온도는?</span>
    </Header>
  );
};

export default PersonalTitle;