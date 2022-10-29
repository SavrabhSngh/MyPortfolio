import React from "react";
import "./index.css";
import { Typewriter } from "react-simple-typewriter";
import Container from "@mui/material/Container";
import { DUMMY_TEXT } from "../../Services/Messages";
import RHSabout from "./RHSComponent";
import { WELCOME, HI_I_AM, NAME, BEST_SKILLS } from "../../Services/Constants";

const LHSabout = () => {
  const words = ["Software Engineer", "Freelancer", "MERN Stack developer"];
  return (
    <div className="left-about">
      <h3>{WELCOME}</h3>
      <h1>
        {HI_I_AM}
        <span>{NAME}</span>
      </h1>
      <h2>
        A{" "}
        <span>
          <Typewriter
            words={words}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <Container
        sx={{
          display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RHSabout mobile={true} />
      </Container>
      <p>{DUMMY_TEXT}</p>
      <p className="about-text">{DUMMY_TEXT}</p>
      <div className="about-skills">
        <h4>{BEST_SKILLS}</h4>
        <button className="shadow">
          <i className="fab fa-react"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-node"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-angular"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-js"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-aws"></i>
        </button>
        <button className="shadow">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </div>
  );
};

export default LHSabout;
