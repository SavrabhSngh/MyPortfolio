import * as React from "react";
import Grid from "@mui/material/Grid";

export default function FeaturesCard(props) {
  return (
    <Grid
      display={
        props.index < 4
          ? { xs: "block", md: "block", lg: "block" }
          : { xs: "none", md: "block", lg: "block" }
      }
      item
      lg={4}
      sm={6}
      md={6}
      xs={12}
    >
      <div className="card">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="#some">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </Grid>
  );
}
