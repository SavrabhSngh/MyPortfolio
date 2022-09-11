import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./App.css";
import Snackbars from "./Common/Snackbar";
import { useEffect } from "react";
import DrawerAppBar from "./Components/DrawerAppBar";
import Features from "./Components/Features/Features";
import Projects from "./Components/Projects/Projects";
function App(props) {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="App">
      <DrawerAppBar />
      <div className="container">
        <Features />
        <Projects />
      </div>
      <Snackbars />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    snackbarData: state.snackbar,
  };
};

export default connect(mapStateToProps, {})(App);

App.propTypes = {
  snackbarData: PropTypes.shape({
    open: PropTypes.bool,
    autoHideDuration: PropTypes.number,
    severity: PropTypes.string,
    message: PropTypes.string,
  }),
};
