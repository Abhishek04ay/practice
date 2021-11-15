import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <Box bg="#2874F0" w="100%" height="55px" p={1} color="white">
      <Box marginLeft="12%">
      <Link to ="/">
        <img src={logoURL} width="70px" />

        <Text display="flex" height="10px" fontSize="10px" fontStyle="italic">
          Explore
          <Box component="span" style={{ color: "#FFE500" }} display="flex">
            Plus
            <img src={subURL} width="10px" />
          </Box>
          <Box width="40%">
            <Input placeholder="Search here....." />
          </Box>
          <HeaderButtons />
        </Text>
      </Link>
      </Box>
    </Box>
  );
};
export default Header;
