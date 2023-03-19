import { Tooltip } from "@chakra-ui/react";
import { Children } from "react";

const CustomTooltip = ({ label, children }) => {
  return (
    <Tooltip
      label={label}
      fontFamily={"Nanum"}
      p={"20px"}
      borderRadius={"20px"}
      fontSize="2xl"
      bg={"gray.100"}
      color={"black"}
      lineHeight={"35px"}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
