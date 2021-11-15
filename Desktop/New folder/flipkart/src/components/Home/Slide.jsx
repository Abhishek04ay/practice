import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "./constants/data";
import { makeStyles } from "@material-ui/core";
import { Box, Text } from "@chakra-ui/layout";
import Countdown from "react-countdown";
import { Button, Divider } from "@chakra-ui/react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const useStyle = makeStyles({
  image: {
    height: 140,
    width: 140,
  },
});

const Slide = ({timer , title}) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const rendrer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  };

  return (
    <Box marginTop="10px" background="#ffffff">
        <Box display="flex">
      <Text
        padding="12px 15px"
        fontSize="26px"
        fontWeight="600"
        lineHeight="32px"
        marginRight="20px"
      >
        {title}
      </Text>
      {
          timer&&
      <>
      <img src={timerURL} style={{width:24}} />
      <Countdown date={Date.now() + 5.04e7} renderer={rendrer} />
      <Button
        variant="solid"
        colorScheme="blue"
        marginLeft="auto"
        background="#2874f0"
        fontSize="13px"
        borderLeftWidth="2px"
      >
        View All
      </Button>
      </>}

      </Box>

      <Divider fontWeight="600"/>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Box marginTop="35px"padding="25px">
            <img src={product.url} className={classes.image} />
            <Text fontSize="15px" fontWeight="650" marginTop="5px">
              {product.title.shortTitle}
            </Text>
            <Text
              fontSize="14px"
              fontWeight="550"
              marginTop="5px"
              color="green"
            >
              {product.discount}
            </Text>
            <Text
              fontSize="14px"
              fontWeight="550"
              marginTop="5px"
              opacity="0.6"
            >
              {product.tagline}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
