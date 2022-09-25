import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Components from "./Components";
import NoMatch from "./Components/NoMatch/NoMatch";
import _ from "lodash";

const App = () => {
  let url,
    route = "/";
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    url = window.location.href;
    console.log("url", url, process.env.REACT_APP_GIT_URL);
    if (_.isEqual(url, process.env.REACT_APP_GIT_URL)) {
      console.log("condition is true");
      route = "/MyPortfolio";
    }
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  console.log("final route", route);
  return (
    <Router>
      <Routes>
        <Route exact path={route} element={<Components />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
