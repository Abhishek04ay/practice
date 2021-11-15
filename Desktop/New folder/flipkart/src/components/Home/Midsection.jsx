import { Box } from "@chakra-ui/react";
import React from "react";
import { imageURL } from "./constants/data";

const Midsection = () => {
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50'
  return (
      <>
    <Box display="flex" marginTop="10px" justifyContent="space-between">
        {
            imageURL.map(image =>(
                <img src={image} style={{width:'33%'}}/>
            ))
        }
    </Box>
    <img src={coronaURL} style={{width: '100% ' , marginTop:'10px'}}/>
    </>
  )
}
export default Midsection;
