import React from "react";
import "./DocumentLoader.css";
import Lottie from "react-lottie";
import AnimationData from "./document.json";

const DocumentLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
  };
  return (
    <div className="document-loader">
      <Lottie options={defaultOptions} height={200} width={200} />
      <h5>
        <span>Welcome</span> to the world of Awesomness !
      </h5>
    </div>
  );
};

export default DocumentLoader;
