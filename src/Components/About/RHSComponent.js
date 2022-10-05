import React from "react";
import "./index.css";
const RHSabout = (props) => {
  const link = props.mobile ? "./images/boy.png" : "./images/about.png";
  return (
    <div className={props.mobile ? "mob-about" : "right-about"}>
      <img src={link} alt="some" draggable="false" />
    </div>
  );
};

export default RHSabout;
