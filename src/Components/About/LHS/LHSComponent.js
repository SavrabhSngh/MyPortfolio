import React from "react";
import "./LHSComponent.css";
import { Typewriter } from "react-simple-typewriter";
import { DUMMY_TEXT } from "../../../Messages";

const LHSabout = () => {
  const words = ["Profssional Coder", "Software Engineer"];
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
      <p>{DUMMY_TEXT}</p>
      <p>{DUMMY_TEXT}</p>
    </div>
  );
};

export default LHSabout;
