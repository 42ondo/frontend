import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";
import { useApi } from "hooks/useApi";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { useGet } = useApi();
  const navigate = useNavigate();

  useGet(
    "me",
    "auth/me",
    { code },
    {
      onSuccess: () => {
        navigate("/total", { replace: true });
      },
    }
  );

  return (
    <Flex
      width="full"
      height="full"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#765da6"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        width="4vw"
        height="4vw"
      />
    </Flex>
  );
};

export default Auth;
