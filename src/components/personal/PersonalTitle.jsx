import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useGetUserName } from "apis/useGetUserName";
import { determineTitleSet } from "utils/determineTitleSet";

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
  const [titleSet, setTitleSet] = useState({ title: "", description: "" });
  const { login, ondo } = useGetUserName();

  useEffect(() => {
    setTitleSet(determineTitleSet(ondo));
  }, [ondo]);

  return (
    <Header>
      <VStack>
        <HStack>
          <Box>
            <Title>{titleSet.title}</Title>
            <Login>{login?.toUpperCase()}</Login>
          </Box>
          <span>의 평가온도는?</span>
        </HStack>
        <Text fontSize={"2xl"}>이 평가자는 {titleSet.description}</Text>
      </VStack>
    </Header>
  );
};

export default PersonalTitle;
