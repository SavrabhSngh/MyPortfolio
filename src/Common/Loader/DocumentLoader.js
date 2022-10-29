import React from "react";
import "./DocumentLoader.css";
import Lottie from "react-lottie";
import AnimationData from "./document.json";
import { LOADER_WELCOME, LOADER_WORLD } from "../../Services/Constants";

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
        <span>{LOADER_WELCOME}</span> {LOADER_WORLD}
      </h5>
    </div>
  );
};

export default DocumentLoader;
