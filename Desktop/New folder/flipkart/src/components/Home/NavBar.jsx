import React from "react";
import { navData } from "./constants/data";
import { Box, Text } from "@chakra-ui/react";
const NavBar = () => {
  return (
    <Box display="flex" margin="5px 100px 0px 100px" justifyContent="space-between">
      {navData.map((data) => (
        <Box textAlign="center" padding="12px 8px">
          <img src={data.url} width="64" />
          <Text fontSize="14" fontWeight="600">{data.text}</Text>

        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
