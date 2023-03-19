import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ConditionalLink = ({ isLink, children, to }) => {
  return isLink ? (
    <Link as="Link" to={to}>
      {children}
    </Link>
  ) : (
    children
  );
};

export default ConditionalLink;
