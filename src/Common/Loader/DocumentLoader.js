import React from "react";
import "./DocumentLoader.css";
import Lottie from "react-lottie";
import AnimationData from "./document.json";

const DocumentLoader = () => {
  let width = window.screen.width;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
  };
  return (
    <div className="document-loader">
      <Lottie
        options={defaultOptions}
        width={width > 676 ? 500 : 250}
        height={width > 676 ? 500 : 250}
      />
      <h5>
        <span>Welcome</span> to my world !
      </h5>
    </div>
  );
};

export default DocumentLoader;
