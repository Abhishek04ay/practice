import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
function HeaderButtons() {
  return (
    <Box
      margin="0 7% 0 auto"
      display="flex"
      textAlign="center"
      boxShadow="none"
    >
      <Link>
        <Button
          marginRight="50px"
          fontSize="13px"
          width="100px"
          fontStyle="normal"
          marginBottom="4"
        >
          Login
        </Button>
      </Link>
      <Link>
        {" "}
        <Text marginRight="50px" fontSize="13px" fontStyle="normal">
          More
        </Text>
      </Link>
      <Link to="/cart">
        <Box display="flex">
          <AiOutlineShoppingCart size={20} />

          <Text
            marginRight="50px"
            fontSize="13px"
            marginLeft="1"
            fontStyle="normal"
          >
            Cart
          </Text>
        </Box>
      </Link>
    </Box>
  );
}

export default HeaderButtons;
