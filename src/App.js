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
    if (_.isEqual(url, process.env.REACT_APP_GIT_URL)) {
      route = "/MyPortfolio";
    }
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

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
