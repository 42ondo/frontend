import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as LogoImage } from "../assets/images/logo.svg";

const Container = styled.div`
  flex: ${(props) => props.flexOption};
  display: flex;
  align-items: center;
`;

const Logo = ({ color, flexOption }) => {
  return (
    <Container flexOption={flexOption}>
      <LogoImage color={color} />
    </Container>
  );
};

export default Logo;
