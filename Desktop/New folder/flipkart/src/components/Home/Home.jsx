import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box } from "@chakra-ui/react";
import Slide from "./Slide";
import Midsection from "./Midsection"

const Home = () => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <div>
      <NavBar />
      <Box padding="10px" backgroundColor="#f2f2f2">
        <Banner />
      </Box>
      <Box display="flex">
        <Box width="83%">
          <Slide timer={true} title="Deal of the Day"/>
        </Box>
        <Box background="#ffffff" padding="1px" margin="12px 00 15px" width="17%">
          <img src={adURL} width="250px" height="auto"/>
        </Box>
      </Box>
      <Midsection />
      <Slide timer={false} title="Discount for you" />
      <Slide timer={false} title="Suggested Items" />
      <Slide timer={false} title="Top Selection " />
      <Slide timer={false} title="Recommended for you" />
      <Slide timer={false} title="Best Sellers" />
      
    </div>
  );
};

export default Home;
