import React from "react";
import { ProjectsData } from "../../Services/DataService";
import ProjectsCard from "../../Common/ProjectsCard";
import Grid from "@mui/material/Grid";
import { PROJECT_AND_FFEDBACK, MY_PROJECT } from "../../Services/Constants";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="heading text-align">
        <h4>{PROJECT_AND_FFEDBACK}</h4>
        <h1>{MY_PROJECT}</h1>
      </div>
      <div className="content grid">
        <Grid container rowSpacing={4} columnSpacing={{ lg: 5, sm: 4, md: 5 }}>
          {ProjectsData.map((obj, index) => {
            return (
              <ProjectsCard
                key={index}
                image={obj.image}
                title={obj.title}
                totalLike={obj.totalLike}
                category={obj.category}
                index={index}
                status={obj.status}
              />
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
