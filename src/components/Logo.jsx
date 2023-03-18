import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { ReactComponent as LogoImage } from "assets/images/logo.svg";

const Container = styled(Button)`
  flex: ${(props) => props.flexOption};
  display: flex;
  align-items: center;
  background-color: transparent;
  &:hover {
    background: transparent;
  }
`;

const Logo = ({ color, flexOption, className, to }) => {
  return (
    <Container as={Link} flex={flexOption} className={className} to={to}>
      <LogoImage color={color} />
    </Container>
  );
};

export default Logo;
