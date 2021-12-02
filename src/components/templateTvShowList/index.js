import React from "react";
import Grid from "@material-ui/core/Grid";
import ShowList from "../showList";
import Header from "../headerMovieList";



function tvShowPageTemplate({ shows, action, title 
 }) {
  

  return (
    <Grid container>
      <Grid item xs={12}>
      {<Header title={title} /> }
      </Grid>
      <Grid item container spacing={5}>
        
      <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        
          
        </Grid>
        <ShowList action={action} shows={shows}></ShowList>

      </Grid>
    </Grid>
  );
}
export default tvShowPageTemplate;