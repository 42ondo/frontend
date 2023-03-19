import { Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const SuspenseSpinner = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default SuspenseSpinner;
