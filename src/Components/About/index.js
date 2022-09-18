import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import LHSabout from "./LHS/LHSComponent";
import RHSabout from "./RHS/RHSComponent";

const useStyles = makeStyles({
  about: {
    marginTop: "12vh",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Grid container rowSpacing={3} columnSpacing={{ lg: 1, sm: 1, md: 1 }}>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <LHSabout />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          lg={5}
          md={5}
          sm={12}
          xs={12}
        >
          <RHSabout />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
