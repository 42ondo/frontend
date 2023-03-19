import { Spinner, Stack } from "@chakra-ui/react";
import React from "react";

const CustomSpinner = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Spinner
        className="spinner"
        margin="auto"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="var(--color-grey)"
        width="6vw"
        height="6vw"
      />
    </Stack>
  );
};

export default CustomSpinner;
