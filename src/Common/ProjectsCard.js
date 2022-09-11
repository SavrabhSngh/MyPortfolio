import * as React from "react";
import Grid from "@mui/material/Grid";

export default function ProjectsCard(props) {
  return (
    <Grid item lg={4} sm={6} md={6} xs={12}>
      <div className={props.index < 3 ? "card show" : "card hide"}>
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="category">
          <span>{props.category}</span>
          <label>
            <i className="far fa-heart"></i>
            {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <a href="#popup" className="arrow">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </Grid>
  );
}
