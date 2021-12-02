import React from "react";

import Typography from "@material-ui/core/Typography";



const TvDetails = ({ show }) => {  // Don't miss this!

  
    return (
      <>
        <Typography variant="h5" component="h3">
          Overview
        </Typography>
  
        <Typography variant="h6" component="p">
          {show.overview}
        </Typography>
  


    </>
  );
};


export default  TvDetails ;