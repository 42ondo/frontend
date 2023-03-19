import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useGetUserName } from "apis/useGetUserName";
import { useGetUserTitleName } from "apis/useGetUserTitleName";

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

const titleMap = [
  ["열정적인", "열정넘치는 평가의 달인입니다"],
  ["자신있는", "자신감 넘치는 평가자입니다"],
  ["활기찬", "활기찬 평가를 지향합니다"],
  ["철저한", "철저하게 평가해 드립니다."],
  ["부지런한", "꾸준하고 성실한 카뎃입니다."],
  ["안정적인", "신뢰성 있는 평가를 지향합니다."],
  ["솔직한", "솔직한 평가를 추구합니다."],
  ["차분한", "차분하고 고요하게 평가해 드립니다"],
  ["독립적인", "독립적인 평가 성향입니다."],
  ["낙천적인", "낙천적인 평가 성향입니다."],
];

const getTitle = (ondo) => {
  return (
    titleMap[9 - Math.floor(ondo / 10)] || [
      "수줍은",
      "평가를 수줍어 하시는군요!",
    ]
  );
};

const PersonalTitle = () => {
  const { login, ondo } = useGetUserName();
  // const { title } = useGetUserTitleName();

  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle(getTitle(ondo));
  }, [title]);

  return (
    <Header>
      <VStack>
        <HStack>
          <Box>
            <Title className="title">{title[0]}</Title>
            <Login>{login?.toUpperCase()}</Login>
          </Box>
          <span>의 평가온도는?</span>
        </HStack>
        <Text fontSize={"2xl"}>이 평가자는 {title[1]}</Text>
      </VStack>
    </Header>
  );
};

export default PersonalTitle;
