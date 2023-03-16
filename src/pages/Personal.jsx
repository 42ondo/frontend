import React from "react";
import { useParams } from "react-router-dom";
import Thermometer from "../components/Themometer";
import { Box } from "@chakra-ui/react";

function PersonalPage() {
  const { username } = useParams();
  console.log(username);
  return (
    <>
      <h1>personalPage userId : {username}</h1>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Thermometer value1={80} value2={50} />
      </Box>
    </>
  );
}

export default PersonalPage;
