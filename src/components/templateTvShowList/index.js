import React from "react";
import Grid from "@material-ui/core/Grid";
//import { makeStyles } from "@material-ui/core/styles";
import ShowList from "../showList";

// const useStyles = makeStyles({
//   root: {
//     padding: "20px",
//   },
// });

function tvShowPageTemplate({ shows, action }) {
  //const classes = useStyles();


  return (
    <Grid container>
      <Grid item xs={12}>
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