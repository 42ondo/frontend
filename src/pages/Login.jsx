import { Button, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SquaredLogo from "../assets/images/squaredLogo.svg";

const BackGround = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #765da6;
  background-image: url(${SquaredLogo});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function LoginPage() {
  return (
    <BackGround>
      <Logo color="white" />
      <Button
        as={Link}
        marginTop="40px"
        to={`${process.env.REACT_APP_OAUTH_LINK}`}
        w={"20%"}
        minWidth={"300px"}
        h={"70px"}
        bg={"white"}
        borderRadius={"20px"}
        leftIcon={<Image src="/42logo.png" />}
        fontSize={"25px"}
      >
        42 Intra Login
      </Button>
    </BackGround>
  );
}

export default LoginPage;
