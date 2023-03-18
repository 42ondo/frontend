import React from "react";
import styled from "@emotion/styled";
import { useGetUserName } from "../../apis/useGetUserName";
import { useGetUserTitleName } from "../../apis/useGetUserTitleName";
import { Box } from "@chakra-ui/react";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 40px;
  font-size: 60px;
  font-weight: bold;
  justify-content: center;
  font-size: 48px;
  margin-left: 10px;

  @media screen and (max-width: 1400px) {
    & {
      flex-direction: column;
    }
  }
`;

const Title = styled.span`
  font-size: 60px;
  color: var(--color-red);
`;
const Login = styled.b`
  font-family: "Bungee", cursive;
  font-size: 60px;
  margin-left: 20px;
  margin-right: 20px;

  color: black;
`;

const PersonalTitle = () => {
  const { login } = useGetUserName();
  const { title } = useGetUserTitleName();

  return (
    <Header>
      <Box>
        <Title className="title">{title}</Title>
        <Login>{login?.toUpperCase()}</Login>
      </Box>
      <span>의 평가온도는?</span>
    </Header>
  );
};

export default PersonalTitle;
