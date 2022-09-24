import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Components from "./Components";
import NoMatch from "./Components/NoMatch/NoMatch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Components />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
