import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      {/* <Link to={`${process.env.REACT_APP_OAUTH_LINK}`}>42 OAuth</Link> */}
      <Image
        src="/Login.png"
        width="full"
        height="full"
        alt="Login"
        pointerEvents="none"
      />
      <Button
        as={Link}
        to={`${process.env.REACT_APP_OAUTH_LINK}`}
        position={"absolute"}
        top={"46%"}
        left={"40%"}
        w={"20%"}
        h={"8%"}
        bg={"white"}
        borderRadius={"20px"}
        leftIcon={<Image src="/42logo.png" />}
        fontSize={"25px"}
      >
        42 Intra Login
      </Button>
    </>
  );
}

export default LoginPage;
