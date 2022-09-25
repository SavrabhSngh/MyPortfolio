import { useEffect, useRef } from "react";
import "./ContextMenu.css";
const ContextMenu = () => {
  const contextRef = useRef();
  const scope = document.querySelector("body");

  const handleContextMenu = (event) => {
    event.preventDefault();
    const { clientX: mouseX, clientY: mouseY } = event;
    contextRef.current.style.top = `${mouseY}px`;
    contextRef.current.style.left = `${mouseX}px`;
    contextRef.current.style.display = "block";
  };

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (contextRef.current.style?.display === "block") {
        event.preventDefault();
      }
    });
  }, []);

  useEffect(() => {
    scope.addEventListener("contextmenu", handleContextMenu);
    scope?.addEventListener("click", (event) => {
      contextRef.current.style.display = "none";
    });
  }, [contextRef.current]);

  return (
    <div ref={contextRef} id="context-menu">
      <div className="item">Option 1</div>
      <div className="item">Option 2</div>
      <div className="item">Option 3</div>
      <div className="item">Option 4</div>
      <div className="item">Option 5</div>
    </div>
  );
};

export default ContextMenu;
