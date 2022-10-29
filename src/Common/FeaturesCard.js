import * as React from "react";
import Grid from "@mui/material/Grid";

export default function FeaturesCard(props) {
  return (
    <Grid
      display={
        props.index < 4
          ? { xs: "flex", md: "flex", lg: "flex" }
          : { xs: "none", md: "flex", lg: "flex" }
      }
      sx={{ justifyContent: "center", alignItems: "center" }}
      item
      lg={4}
      sm={6}
      md={6}
      xs={12}
    >
      <div className="card">
        <img src={props.image} alt="" draggable="false" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </Grid>
  );
}
