import React from "react";
import "./index.css";
import Grid from "@mui/material/Grid";
import LHSContact from "./LHSContact";
import RHSContact from "./RHSContact";
import { CONTACT, REACH_OUT } from "../../Services/Constants";

const Contact = () => {
  return (
    <div className="contact">
      <div className="heading">
        <h1>{CONTACT}</h1>
        <h4>{REACH_OUT}</h4>
      </div>
      <div className="contact-body">
        <Grid container rowSpacing={1} columnSpacing={{ lg: 1, sm: 1, md: 3 }}>
          <Grid item lg={7} md={6} sm={12} xs={12}>
            <LHSContact />
          </Grid>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <RHSContact />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
