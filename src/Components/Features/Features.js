import React from "react";
import FeaturesCard from "../../Common/FeaturesCard";
import "./Features.css";
import { FeaturesData } from "../../Services/DataService";
import Grid from "@mui/material/Grid";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="heading">
        <h4>FEATURES</h4>
        <h1>What I Do </h1>
      </div>
      <div className="grid">
        <Grid container rowSpacing={3} columnSpacing={{ lg: 1, sm: 1, md: 5 }}>
          {FeaturesData.map((obj, index) => {
            return (
              <FeaturesCard
                key={index}
                image={obj.image}
                title={obj.title}
                desc={obj.desc}
                index={index}
              />
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Features;
