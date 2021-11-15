import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { bannerData } from './constants/data';
import { makeStyles } from '@material-ui/core';
import { borderRadius } from '@mui/system';

const useStyle = makeStyles({
  image: {
    width:"100%",
    height:"260px",
  }
})
 
const Banner =() => {
  const classes=useStyle();
  return(
 
    <Carousel
       autoPlay={true}
       animation="slide"
       indicators={false}
       navButtonsAlwaysVisible={true}
       cycleNavigation={true}
       navButtonsProps={{
         style:{
           background:"#ffffff",
           color:"#494949",
           borderRadius:0,
           margin:0
          }
       }}>

      {
        bannerData.map ( image => (
          <img src ={image} className={classes.image}/>  
        ))
      }
    </Carousel>
  )
}

export default Banner;
