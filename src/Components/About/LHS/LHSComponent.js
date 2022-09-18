import React from "react";
import "./LHSComponent.css";
import { Typewriter } from "react-simple-typewriter";
import Container from "@mui/material/Container";
import { DUMMY_TEXT } from "../../../Messages";
import RHSabout from "../RHS/RHSComponent";

const LHSabout = () => {
  const words = ["Software Engineer", "Freelancer", "MERN Stack developer"];
  return (
    <div className="left-about">
      <h3>WELCOME TO MY WORLD</h3>
      <h1>
        Hi, I'm <span>Savrabh Singh</span>
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
        <RHSabout />
      </Container>
      <p>{DUMMY_TEXT}</p>
      <p>{DUMMY_TEXT}</p>
      <div className="about-skills">
        <h4>BEST SKILLS ON</h4>
        <button className="shadow">
          <i class="fab fa-react"></i>
        </button>
        <button className="shadow">
          <i class="fab fa-node"></i>
        </button>
        <button className="shadow">
          <i class="fab fa-angular"></i>
        </button>
        <button className="shadow">
          <i class="fab fa-js"></i>
        </button>
        <button className="shadow">
          <i class="fab fa-aws"></i>
        </button>
        <button className="shadow">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </div>
  );
};

export default LHSabout;
